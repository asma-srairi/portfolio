/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import styles from './Modal.module.css'; // Import the updated modal styles

function Modal({ isOpen, onClose, sections }) {
  // Close the modal when the ESC key is pressed
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, [isOpen, onClose]);

  // Close the modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        {/* Loop through each section to render titles, descriptions, images, and videos */}
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.modalTitle}>{section.title}</h2>
            <ul className={styles.modalDescription}> {/* Use <ul> for bullet points */}
              {section.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li> // Map over description array
              ))}
            </ul>

            {/* Render images vertically */}
            <div className={styles.imageContainer}>
              {section.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`image-${index}-${imgIndex}`}
                  className={styles.image}
                />
              ))}
            </div>

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
