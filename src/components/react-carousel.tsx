import React, { useEffect, useState } from "react";

interface IReactCarousel {
  animation: string;
  imgSrc: [any];
  interval?: number;
  label?: any;
}

const ReactCarousel: React.FC<any> = ({
  animation,
  imgSrc,
  interval = 1500,
  label
}: IReactCarousel) => {
  const supportedAnimation = ["fadein"];
  const [error, setError] = useState("");

  //   Animations
  const fadeInAnimation = (slide: any) => {
    slide.style.opacity = "1.2";
    slide.style.zIndex = "1.2";
    slide.style.transform = "scale(1.2)";
  };
  const fadeOutAnimation = (slide: any) => {
    slide.style.opacity = "0";
    slide.style.zIndex = "0";
    setTimeout(() => {
      slide.style.transform = "scale(1)";
    }, interval / 1.2);
  };
  // End of animtaions

  const animations: any = {
    fadeIn: fadeInAnimation,
    fadeOut: fadeOutAnimation
  };

  const isAnimationSupported = () => {
    if (supportedAnimation.includes(animation)) {
      return true;
    }
    setError("Animation type not supported");
    return false;
  };

  const getAllSlides = (): NodeList => {
    return document.querySelectorAll("#carousel .slide");
  };

  useEffect(() => {
    if (isAnimationSupported()) {
      const slides: any = getAllSlides();
      let count: number = 0;
      let slidesLength: number = slides.length;
      for (let i: number = 1; i < slidesLength; i++) {
        slides[i].style.zIndex = "0";
        slides[i].style.opacity = "0";
        slides[i].style.transform = "scale(1)";
      }
      slides[0].style.zIndex = "1";
      slides[0].style.opacity = "1";
      slides[0].style.transform = "scale(1.2)";

      const startInterval = setInterval(() => {
        if (count < slidesLength - 1) {
          count++;
        } else {
          count = 0;
        }

        for (let i: number = 0; i < slidesLength; i++) {
          if (count === i) {
            animations.fadeIn(slides[count]);
          } else {
            animations.fadeOut(slides[i]);
          }
        }
      }, interval);

      return () => clearInterval(startInterval);
    }
  });

  if (error.length > 0) {
    return <p className="error">Error found</p>;
  }

  return (
    <div id="react-carousel">
      {label}
      <div id="carousel">
        {imgSrc?.map((item: any, index: number) => (
          <div className="slide" key={index}>
            <img src={item.src} alt={`carousel${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ReactCarousel;
