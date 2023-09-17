'use client';

import React, { useEffect, useState, useRef } from 'react';
import { loadModel } from '../../utils/loadmodel';
import { NextPage } from 'next';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs';

const PredictPage: NextPage = () => {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    async function load() {
      const loadedModel = await loadModel();
      setModel(loadedModel);
    }
    load();
  }, []);

  // Function to handle image upload
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);

      // Load and preprocess the image
      if (model && canvasRef.current) {
        const img = new Image();
        img.src = imageUrl;
        img.onload = async () => {
          const tensor = tf.browser.fromPixels(img);
          const resized = tf.image.resizeBilinear(tensor, [224, 224]);
          const expanded = resized.expandDims(0);
          const normalized = expanded.div(255.0);

          const predictions = (await (model as tf.LayersModel).predict(
            normalized
          )) as tf.Tensor;
          const predictionData = await predictions.data();
          const topClass = predictionData.indexOf(Math.max(...predictionData));

          setPrediction(`Class ${topClass}`);
        };
      }
    }
  };

  return (
    <div>
      <h1>TensorFlow.js Model Integration</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" width="224" height="224" />}
      <div>
        <h2>Model Prediction:</h2>
        <p>{prediction || 'No prediction yet.'}</p>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default PredictPage;
