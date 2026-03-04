import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios';

export default function FacialExpression({ setSongs }) {
    const [emotion, setEmotion] = useState("Detecting...");
  
    const videoRef = useRef();

    const loadModels = async () => {
        const MODEL_URL = '/models';
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((err) => console.error("Error accessing webcam: ", err));
    };

    async function detectMood() {

        const detections = await faceapi
            .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
            .withFaceExpressions();
        let mostProableExpression = 0
        let _expression = '';

        if (!detections || detections.length === 0) {
            console.log("No face detected");
            return;
        }

        for (const expression of Object.keys(detections[ 0 ].expressions)) {
            if (detections[ 0 ].expressions[ expression ] > mostProableExpression) {
                mostProableExpression = detections[ 0 ].expressions[ expression ]
                _expression = expression;
            }
        }
        setEmotion(_expression)

        /* get http://localhost:3000/songs?mood=happy */
        axios.get(`http://localhost:3000/songs?mood=${_expression}`)
        .then(response=>{
            console.log(response.data);
            setSongs(response.data.song);
        })
    }

    useEffect(() => {
        loadModels().then(startVideo);
    }, []);

    return (
         <div style={{ textAlign: "center", }}>
               <h2>Detected Emotion: {emotion}</h2>

    <button onClick={ detectMood} style={{ backgroundColor:"orange",textAlign: "center" }}>Detect Mood</button>
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
}