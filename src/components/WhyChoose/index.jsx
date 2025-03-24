import React from 'react';
import './index.css';

const WhyChooseObiztec = () => {
  return (
    <section className="why-section">
      <div className="header">
        <h1 className="why-heading">Why Choose Obiztec</h1>
        <div className="question-icon">
          <svg className="question-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM15.07 9.25C14.86 9.92 14.4 10.47 13.74 10.79C13.24 11.03 12.5 11.25 12 11.43V12H11V11.43C11.5 11.25 12.24 11.03 12.74 10.79C13.4 10.47 13.86 9.92 14.07 9.25C14.28 8.58 14.22 7.89 13.89 7.28C13.56 6.67 12.95 6.25 12.18 6.07C11.41 5.89 10.63 6.07 9.93 6.57C9.23 7.07 8.76 7.83 8.54 8.75H7.5C7.72 7.58 8.24 6.53 9.07 5.75C9.9 4.97 10.95 4.5 12 4.5C13.05 4.5 14.1 4.97 14.93 5.75C15.76 6.53 16.28 7.58 16.5 8.75C16.72 8.92 16.5 9.08 15.07 9.25Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="why-img-box">
        <div className="img-rectangle"></div>
        <div className="img-1">
          <img src="https://res-console.cloudinary.com/dsu49fx2b/media_explorer_thumbnails/e202be04e4bdd0145d0d06e9aca98cac/detailed" alt="Image 1" />
        </div>
        <div className="img-2">
          <img src="https://res-console.cloudinary.com/dsu49fx2b/media_explorer_thumbnails/8f197125df512f8dde160b90f41ac3c0/detailed" alt="Image 2" />
        </div>
      </div>
      <div className="why-text">
        <div className="why-text-box">
          <div className="why-item why-1">
            <div className="icon">
              <img src="../../../public/Group.svg" alt="Check Icon" className="check-icon" />
            </div>
            <div className="text-box">
              <h3>Affordable & Scalable Solutions</h3>
              <p>Cost-effective tech solutions that grow with your business needs.</p>
            </div>
          </div>
          <div className="why-item why-2">
            <div className="icon">
              <img src="../../../public/Group.svg" alt="Check Icon" className="check-icon" />
            </div>
            <div className="text-box">
              <h3>Custom Development</h3>
              <p>Tailored websites and apps designed to meet your unique requirements.</p>
            </div>
          </div>
          <div className="why-item why-3">
            <div className="icon">
              <img src="../../../public/Group.svg" alt="Check Icon" className="check-icon" />
            </div>
            <div className="text-box">
              <h3>Fast Turnaround</h3>
              <p>Quick delivery without compromising on quality or functionality.</p>
            </div>
          </div>
          <div className="why-item why-4">
            <div className="icon">
              <img src="../../../public/Group.svg" alt="Check Icon" className="check-icon" />
            </div>
            <div className="text-box">
              <h3>Post-Launch Support</h3>
              <p>Ongoing maintenance and support to ensure your tech runs smoothly.</p>
            </div>
          </div>
          <div className="why-item why-5">
            <div className="icon">
              <img src="../../../public/Group.svg" alt="Check Icon" className="check-icon" />
            </div>
            <div className="text-box">
              <h3>Proven Expertise</h3>
              <p>Experienced team delivering successful projects across industries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseObiztec;