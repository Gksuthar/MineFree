import React from 'react';
import './index.css';

const WelcomeSection = () => {
  return (
    <div className="section-features">
      <div className="features">
        {/* Heading */}
        <div className="heading-container">
          <h1 className="welcome-heading">
            Welcome to Obiztec
            <span className="heading-decore">
              <span className="subtract subtract-1"></span>
              <span className="subtract subtract-2"></span>
            </span>
          </h1>
        </div>

        {/* Features Container */}
        <div className="features-container">
          {/* Feature 2: Our Mission */}
          <div className="feature feature-2">
            <div className="feature-background">
              <div className="ellipse ellipse-1"></div>
              <div className="ellipse ellipse-2"></div>
              <div className="rectangle rectangle-3"></div>
              <div className="icon mission-icon">
                {/* Mission आइकन के लिए प्लेसहोल्डर */}
                <div className="vector vector-1"></div>
                <div className="vector vector-2"></div>
              </div>
              <div className="feature-content">
                <h2 className="feature-heading">Our Mission</h2>
                <p className="feature-text">
                  To empower entrepreneurs and small to medium-sized businesses by providing accessible, high-quality custom tech solutions that drive growth and success.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 1: Affordable Solutions */}
          <div className="feature feature-1">
            <div className="feature-background">
              <div className="ellipse ellipse-1"></div>
              <div className="ellipse ellipse-2"></div>
              <div className="rectangle rectangle-3"></div>
              <div className="icon development-icon">
                {/* Development आइकन के लिए प्लेसहोल्डर */}
                <div className="vector vector-1"></div>
                <div className="vector vector-2"></div>
                <div className="vector vector-3"></div>
              </div>
              <div className="feature-content">
                <p className="feature-text">
                  We offer affordable, top-tier website and app development solutions tailored for entrepreneurs and small businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Our Goal */}
          <div className="feature feature-3">
            <div className="feature-background">
              <div className="ellipse ellipse-1"></div>
              <div className="ellipse ellipse-2"></div>
              <div className="rectangle rectangle-3"></div>
              <div className="icon goal-icon">
                {/* Goal आइकन के लिए प्लेसहोल्डर */}
                <div className="vector vector-1"></div>
                <div className="vector vector-2"></div>
                <div className="vector vector-3"></div>
              </div>
              <div className="feature-content">
                <h2 className="feature-heading">Our Goal</h2>
                <p className="feature-text">
                  We aim to bridge the digital gap by making custom tech solutions accessible and affordable. Our focus is on helping businesses establish a strong online presence, enhance customer engagement, and drive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;