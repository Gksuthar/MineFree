import React from 'react';
import './index.css';

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-features">
        {/* Heading */}
        <div className="welcome-heading-container">
          <h1 className="welcome-title">
            Welcome to Obiztec
            <span className="welcome-heading-decor">
              <span className="welcome-decor-shape welcome-decor-shape-1"></span>
              <span className="welcome-decor-shape welcome-decor-shape-2"></span>
            </span>
          </h1>
        </div>

        {/* Features Container */}
        <div className="">
          {/* Feature 2: Our Mission */}
          <div className="welcome-feature welcome-feature-mission">
            <div className="welcome-feature-background">
              <div className="welcome-ellipse welcome-ellipse-1">
                <img src="" alt="" />
              </div>
              <div className="welcome-ellipse welcome-ellipse-2"></div>
              <div className="welcome-rectangle welcome-rectangle-3"></div>
              <div className="welcome-icon welcome-mission-icon">
                <div className="welcome-vector welcome-vector-1"></div>
                <div className="welcome-vector welcome-vector-2"></div>
              </div>
              <div className="welcome-feature-content">
                <h2 className="welcome-feature-heading">Our Mission</h2>
                <p className="welcome-feature-text">
                  To empower entrepreneurs and small to medium-sized businesses by providing accessible, high-quality custom tech solutions that drive growth and success.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 1: Affordable Solutions */}
          <div className="welcome-feature welcome-feature-affordable">
            <div className="welcome-feature-background">
              <div className="welcome-ellipse welcome-ellipse-1"></div>
              <div className="welcome-ellipse welcome-ellipse-2"></div>
              <div className="welcome-rectangle welcome-rectangle-3"></div>
              <div className="welcome-icon welcome-development-icon">
                <div className="welcome-vector welcome-vector-1"></div>
                <div className="welcome-vector welcome-vector-2"></div>
                <div className="welcome-vector welcome-vector-3"></div>
              </div>
              <div className="welcome-feature-content">
                <p className="welcome-feature-text">
                  We offer affordable, top-tier website and app development solutions tailored for entrepreneurs and small businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Our Goal */}
          <div className="welcome-feature welcome-feature-goal">
            <div className="welcome-feature-background">
              <div className="welcome-ellipse welcome-ellipse-1"></div>
              <div className="welcome-ellipse welcome-ellipse-2"></div>
              <div className="welcome-rectangle welcome-rectangle-3"></div>
              <div className="welcome-icon welcome-goal-icon">
                <div className="welcome-vector welcome-vector-1"></div>
                <div className="welcome-vector welcome-vector-2"></div>
                <div className="welcome-vector welcome-vector-3"></div>
              </div>
              <div className="welcome-feature-content">
                <h2 className="welcome-feature-heading">Our Goal</h2>
                <p className="welcome-feature-text">
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