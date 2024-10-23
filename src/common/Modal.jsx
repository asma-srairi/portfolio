/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Modal.module.css'; // Import the updated modal styles

function Modal({ isOpen, onClose, sections }) {
  if (!isOpen) return null;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        {/* Loop through each section to render multiple carousels, titles, descriptions, and videos */}
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.modalTitle}>{section.title}</h2>
            <ul className={styles.modalDescription}> {/* Use <ul> for bullet points */}
              {section.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li> // Map over description array
              ))}
            </ul>

            {/* Horizontal carousel for images */}
            <Carousel responsive={responsive} className={styles.carousel}>
              {section.images.map((img, imgIndex) => (
                <div key={imgIndex} className={styles.carouselItem}>
                  <img src={img} alt={`carousel-${index}-${imgIndex}`} />
                </div>
              ))}
            </Carousel>

            {/* Render video if available */}
            {section.videoSrc && (
              <div className={styles.videoContainer}>
                <video controls>
                  <source src={section.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modal;
