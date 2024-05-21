import React, { useEffect, useState } from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

const WhatGPT3 = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handlePredictButtonClick = () => {
    if (currentUser) {
      fetch("http://localhost:5000/otherpage") // Make an HTTP GET request to the Flask backend route
        .then((response) => {
          if (response.ok) {
            // If the response is successful, navigate to the other page
            window.location.href = "http://localhost:5000/otherpage";
          } else {
            // Handle error if needed
            console.error("Error navigating to other page:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error navigating to other page:", error);
        });
    } else {
      navigate("/login");
    }
  };

  const handleDietsButtonClick = () => {
    if (currentUser) {
      navigate("/diet");
    } else {
      navigate("/login");
    }
  };

  const exercisebtn = () => {
    if (currentUser) {
      navigate("/exec");
    } else {
      navigate("/login");
    }
  };

  const chatbtn = () => {
    if (currentUser) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <AnimatedFeature
          className="text-4xl text-blue-900"
          title="What is CardioCare"
          text="Our machine learning model is trained on vast amounts of data, enabling us to accurately predict your risk of heart disease. With unparalleled precision, we empower you to take proactive steps towards a healthier heart."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The services that we offer</h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 className=" text-gray-800 text-5xl font-semibold ml-4">
          Services that we offer
        </h1>
      </div>

      <div className="gpt3__whatgpt3-container">
        <div className="flex flex-row">
          <div className="flex flex-col p-4">
            <AnimationPPP  className="flex flex-col p-4"
              title="Heart Disease Detection"
              text="Our ML model analyzes various health parameters to assess your risk of heart disease accurately. Receive personalized risk assessments and actionable insights to guide your heart health journey."
            />
            <button
              type="button"
              onClick={handlePredictButtonClick}
              className="text-white w-44 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Predict
            </button>
          </div>
          <div className="flex flex-col p-4">
            <AnimationPPP  className="flex flex-col p-4"
              title="Personalized Diet Recommendations"
              text="Nutrition plays a crucial role in heart health. Our platform generates customized diet plans based on your dietary preferences, health goals, and medical history."
            />
            <button
              type="button"
              onClick={handleDietsButtonClick}
              className="text-white w-44 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Diets
            </button>
          </div>
          <div className="flex flex-col p-4">
            <AnimationPPP  className="flex flex-col p-4"
              title="Exercise Plans"
              text="Regular physical activity is essential for maintaining a healthy heart. Whether you're a beginner or a fitness enthusiast, Achieve optimal heart health with workouts designed just for you."
            />
            <button
              type="button"
              onClick={exercisebtn}
              className="text-white  w-44 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Exercises
            </button>
          </div>
          <div className="flex flex-col p-4">
            <AnimationPPP  className="flex flex-col p-4"
              title="Community Chat"
              text="Connect with like-minded individuals in our community chat. Share your experiences, ask questions, and receive support from others on their heart health journey. Together, we can inspire and motivate each other to prioritize our heart health."
            />
            <button
              type="button"
              onClick={chatbtn}
              className="text-white w-44 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Explore community
            </button>
          </div>
          {/* Other features */}
        </div>
      </div>
    </div>
  );
};

const AnimatedFeature = ({ title, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Feature title={title} text={text} />
    </motion.div>
  );
};

const AnimationPPP = ({ title, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 1.21 }}
    >
      <Feature
        title={title}
        text={text}
      />
         
    </motion.div>
  );
};

export default WhatGPT3;
