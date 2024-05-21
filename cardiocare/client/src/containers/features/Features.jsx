import React, { useEffect } from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
   
    <div className="flex items-center justify-center mt-12">
      <h1 className=" text-blue-900 text-5xl font-semibold ml-4">
        Features of our product
      </h1>
    </div>

    <div className="gpt3__whatgpt3-container">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Feature
            title="Early Detection"
            text="Detect potential heart diseases at an early stage, allowing for timely intervention and proactive management of cardiovascular health."
          />
        </div>
        <div className="flex flex-col ">
          <Feature
            title="Accuracy"
            text="Utilize a highly accurate machine learning model to assess the risk of heart disease with precision, providing users with reliable and trustworthy results."
          />
        </div>
        <div className="flex flex-col">
          <Feature
            title="Convenience"
            text="Provide convenient at-home testing options for diagnostic assessments, making it easier for users to monitor their heart health without the need for frequent clinic visits."
          />
        </div>
        <div className="flex flex-col ">
          <Feature
            title="Empowerment"
            text="Empower users to take control of their heart health, providing them with the tools, resources, and support they need to lead healthier, happier lives and reduce their risk of cardiovascular disease."
          />
        </div>
      </div>
    </div>
  </div>
);

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

export default Features;
