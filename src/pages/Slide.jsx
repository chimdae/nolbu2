import React, { useState, useEffect } from 'react';
import './Slide.css';

function Slide() {
  const images = ['img/europe.png','img/mountain.jpg', 'img/airplane.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="root-wrap">
      <div className="slide1">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`React Image${index + 1}`}
            style={{
              height: '450px',
              width: 'auto',
              objectFit: 'cover',
              display: index === currentIndex ? 'block' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slide;
