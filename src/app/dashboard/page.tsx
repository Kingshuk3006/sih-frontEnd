'use client';

import React, { useEffect, useState, useRef } from 'react';
import { loadModel } from '../../utils/loadmodel';
import { NextPage } from 'next';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs';
import { Class } from '../../database/diesease';

const PredictPage: NextPage = () => {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [useWebcam, setUseWebcam] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [diesease, setDiesease] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      const loadedModel = await loadModel();
      setModel(loadedModel);
    }
    load();
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
      startPrediction();
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
        startPrediction();
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
        console.log('Prediction:', predictionData);
      };
    }
  };

  return (
    <div>
      <h1>TensorFlow.js Model Integration</h1>
      <button onClick={toggleInput}>
        {useWebcam ? 'Switch to Image' : 'Switch to Webcam'}
      </button>
      {useWebcam ? (
        <div>
          <video ref={videoRef} autoPlay width="224" height="224" />
          <button onClick={captureImage}>Capture</button>
        </div>
      ) : (
        <div>
          {/* Add your image upload input here */}
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {image && <img src={image} alt="Captured" width="224" height="224" />}
        </div>
      )}
      {image && (
        <div>
          <button onClick={startPrediction}>Start Predicting</button>
        </div>
      )}
      {prediction !== null && (
        <div>
          <h2>Model Prediction:</h2>
          <p>{Class[diesease as number]}</p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{ display: 'none' }}
        width="224"
        height="224"
      />
    </div>
  );
};

export default PredictPage;
