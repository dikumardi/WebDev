import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const FaceExpressionDetector = () => {
  const videoRef = useRef();
  const [emotion, setEmotion] = useState("Detecting...");

  

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const loadModels = async () => {
    const MODEL_URL = "/models";

    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

    detectFace();
  };

  const detectFace = () => {

    setInterval(async () => {
      if (!videoRef.current) return;

      const detection = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceExpressions();

      if (detection && detection.expressions) {
        const expressions = detection.expressions;

        const maxEmotion = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b
        );

        setEmotion(maxEmotion);
      }
    }, 800);
  };
          

   useEffect(() => {
    startVideo();
    loadModels();
  }, );

  return (
    
    <div style={{ textAlign: "center", }}>
    <button style={{ backgroundColor:"orange",textAlign: "center" }}>Detect Mood</button>
      <h2>Detected Emotion: {emotion}</h2>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="300"
        height="300"
        style={{ borderRadius: "200px" }}
      />
      
    </div>
  );
};

export default FaceExpressionDetector;