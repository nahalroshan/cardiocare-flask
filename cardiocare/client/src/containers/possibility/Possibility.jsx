import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Join the CardioCare Community</h4> */}
      <h1 className="gradient__text">Join the CardioCare Community</h1>
      <p>Take charge of your heart health with CardioCare. Sign up now to access our advanced heart disease detection, personalized diet and exercise recommendations, and join our supportive community chat. Your heart deserves the best – let HeartGuard be your partner in achieving optimal heart health.</p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Possibility;
