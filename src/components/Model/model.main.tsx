'use client';

import React, { useEffect, useState, useRef } from 'react';
import { loadModel } from '../../utils/loadmodel';
import { NextPage } from 'next';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs';
import { Class } from '../../database/diesease';

const Model = () => {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [useWebcam, setUseWebcam] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [diesease, setDiesease] = useState<number | null>(null);
  const [isloading, setIsloading] = useState<boolean>(true);
  const [isloadingDiesease, setIsloadingDiesease] = useState<boolean>(false);

  useEffect(() => {
    async function load() {
      const loadedModel = await loadModel();
      setModel(loadedModel);
    }
    load();
    setIsloading(false);
  }, []);

  // Function to handle switching between image and webcam inputs
  const toggleInput = () => {
    setUseWebcam(!useWebcam);
    if (useWebcam) {
      stopWebcam();
    } else {
      startWebcam();
    }
  };
  // handle image file upload
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setUseWebcam(false); // Switch back to image input mode

      // Load and preprocess the image
      //startPrediction();
    }
  };

  // Function to handle capturing an image from webcam
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const capturedImage = canvas.toDataURL('image/jpeg');
        setImage(capturedImage);
        setUseWebcam(false); // Switch back to image input mode

        // Load and preprocess the captured image
        //startPrediction();
      }
    }
  };

  // Function to start webcam
  const startWebcam = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setUseWebcam(true);
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    }
  };

  // Function to stop webcam
  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setUseWebcam(false);
    }
  };

  // Function to initiate model prediction
  const startPrediction = async () => {
    setIsloadingDiesease(true);
    if (model && image) {
      const img = new Image();
      img.src = image;
      img.onload = async () => {
        const tensor = tf.browser.fromPixels(img);
        const resized2 = tf.image.resizeBilinear(tensor, [28, 28]);
        const resized = tf.reshape(resized2, [-1, 28, 28, 3]);
        const expanded = resized.expandDims(0);
        //const normalized = expanded.div(255.0);

        const predictions = (await (model as tf.LayersModel).predict(
          resized
        )) as tf.Tensor;
        const predictionData = await predictions.data();
        const topClass = predictionData.indexOf(Math.max(...predictionData));

        setPrediction(`Class ${topClass}`);
        setDiesease(topClass);
        setIsloadingDiesease(false);
        console.log('Prediction:', predictionData);
      };
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
      {isloading ? (
        <h1 className="lg:text-2xl font-bold text-blue-800 text-center">
          Loading...
        </h1>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md ">
          <h1 className="lg:text-3xl font-bold mb-4 text-center">
            Upload Or CLick an Image to Predict Diesease
          </h1>
          <div className="space-y-6">
            <button onClick={toggleInput} className="btn-secondary">
              {useWebcam ? 'Switch to Image' : 'Switch to Webcam'}
            </button>
            {useWebcam ? (
              <div>
                <video
                  ref={videoRef}
                  autoPlay
                  width="224"
                  height="224"
                  className="mt-4 rounded-xl"
                ></video>
                <button onClick={captureImage} className="btn-secondary my-2">
                  Capture
                </button>
              </div>
            ) : (
              <div className="">
                {/* Add your image upload input here */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="fileInput"
                />
                <label htmlFor="fileInput" className="btn-secondary py-3">
                  Upload Image
                </label>
                {image && (
                  <img
                    src={image}
                    alt="Captured"
                    width="224"
                    height="224"
                    className="mt-4 rounded-lg"
                  />
                )}
              </div>
            )}
          </div>

          {image && (
            <div className="mt-4">
              <button onClick={startPrediction} className="btn-secondary">
                Start Predicting
              </button>
              {isloadingDiesease ? (
                <h1 className="lg:text-2xl text-center font-bold text-blue-800 mt-4">
                  Loading...
                </h1>
              ) : (
                <>
                  {prediction !== null && (
                    <div className="mt-4">
                      <h2 className="text-xl font-bold">Model Prediction:</h2>
                      <p className="text-blue-800">
                        {Class[diesease as number]}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          <canvas
            ref={canvasRef}
            style={{ display: 'none' }}
            width="224"
            height="200"
          />
        </div>
      )}
    </div>
  );
};

export default Model;
