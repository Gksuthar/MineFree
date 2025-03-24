import React from 'react';
import './index.css';

const Services = () => {
  return (
    <div className="servicemain">
      <section className="services-section">
        <div className="heading-container">
          <h2 className="services-heading">Our Services</h2>
          <div className="subtract-shape"></div>
        </div>
        <div className="services-content">
          <div className="services-list">
            {/* Service 1: Website Development */}
            <div className="service-item service-1">
              <div className="service-icon web-dev-icon">
                <img src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816395/xvtnswiem3sgtowkpbhy.png" alt="Website Development Icon" />
              </div>
              <div className="service-text">
                <h3>Website Development</h3>
                <p>Custom, responsive websites for a strong online presence.</p>
              </div>
            </div>
            {/* Service 2: E-Commerce Solutions */}
            <div className="service-item service-2">
              <div className="service-icon ecommerce-icon">
                <img src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816417/s46wz4fjfunr3pvtsglx.png" alt="E-Commerce Icon" />
              </div>
              <div className="service-text">
                <h3>E-Commerce Solutions</h3>
                <p>Secure and user-friendly online stores with integrated payments.</p>
              </div>
            </div>
            {/* Service 3: Mobile App Development */}
            <div className="service-item service-3">
              <div className="service-icon mobile-app-icon">
                <img src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816419/bwd6f1zkecortqncr16r.png" alt="Mobile App Icon" />
              </div>
              <div className="service-text">
                <h3>Mobile App Development</h3>
                <p>High-quality iOS & Android apps for better engagement.</p>
              </div>
            </div>
            {/* Service 4: SEO & Digital Marketing */}
            <div className="service-item service-4">
              <div className="service-icon seo-icon">
                <img src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816403/avlzkiiwe6cxpmpxfbev.png" alt="SEO Icon" />
              </div>
              <div className="service-text">
                <h3>SEO & Digital Marketing</h3>
                <p>Boost visibility, attract traffic, and increase conversions.</p>
              </div>
            </div>
            {/* Service 5: Branding & Design */}
            <div className="service-item service-5">
              <div className="service-icon branding-icon">
                <img src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742816419/kfkmkpmjj4keqzhjz6m3.png" alt="Branding Icon" />
              </div>
              <div className="service-text">
                <h3>Branding & Design</h3>
                <p>Professional logos, brand identity, and UI/UX design.</p>
              </div>
            </div>
          </div>
          
          <div className="services-image">
            <img src="https://res.cloudinary.com/dsu49fx2b/image/upload/v1742811202/vpiajuw2bvzdxhgy7xnn.png" alt="Services Illustration" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;