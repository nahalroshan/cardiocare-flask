import React from 'react';
// import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import { motion } from 'framer-motion';
import { useAuth } from "../../contexts/authContext";

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <div className="gpt3__header section__padding " id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">CardioCare</h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-gray-800 text-5xl mb-20 font-semibold ml-4">
            {currentUser ? `Hello, ${currentUser.displayName}` : ""}
            
          </h1>
          <h1 className="text-gray-800 text-7xl mb-20 font-semibold ml-4">
            {!currentUser ?  "Cardio Care" : ""}
            
          </h1>
       <br />
        </motion.div>
        <p>At CardioCare, we harness the power of cutting-edge machine learning technology to provide you with highly accurate heart disease detection. Our platform goes beyond diagnosis, offering personalized diet and exercise recommendations tailored to your unique needs. Plus, join our vibrant community chat to connect with others on their heart health journey.</p>

        {/* <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div> */}

        {/* <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}
      </div>

      <div className="gpt3__header-image">
        <img src='https://media.istockphoto.com/id/904523164/vector/brush-drawing-calligraphy-heart-isolated-on-white-bg.jpg?s=612x612&w=0&k=20&c=R9JV3rMcYUjwXLxddbh0ZbxYjozHSehUoZ2oOkihgDY=' />
      </div>
    </div>
  );
};

export default Header;
