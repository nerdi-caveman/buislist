import React, { useEffect, useState } from "react";

interface IReactCarousel {
  animation: string;
  imgSrc: [any];
  interval?: number;
  label?: any;
  id?: number;
  event?: string;
}

const ReactCarousel: React.FC<any> = ({
  animation,
  imgSrc,
  interval = 1500,
  label = <></>,
  id = 1,
  event = "load"
}: IReactCarousel) => {
  const supportedAnimation = ["fadein"];
  const supportedEvent = ["load", "hover"];
  const [error, setError] = useState("");

  //   Animations
  const fadeInAnimation = (slide: any) => {
    slide.style.opacity = "1";
    slide.style.zIndex = "1";
    slide.style.transform = "scale(1.2)";
  };
  const fadeOutAnimation = (slide: any) => {
    slide.style.opacity = "0";
    slide.style.zIndex = "0";
    setTimeout(() => {
      slide.style.transform = "scale(1)";
    }, interval / 1.3);
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
  const isEventSupported = () => {
    if (supportedEvent.includes(event)) {
      return true;
    }
    setError("Animation type not supported");
    return false;
  };

  const getAllSlides = (): NodeList => {
    return document.querySelectorAll(`#carousel${id} .slide`);
  };

  useEffect(() => {
    if (isAnimationSupported()) {
      if (isEventSupported()) {
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

        const toggleImages = () => {
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
        };

        
        if (event === "load") {
          toggleImages();
          const startInterval = setInterval(toggleImages, interval);

          return () => clearInterval(startInterval);
        }

        if (event === "hover") {
          const trigger: any = document.querySelector(`#carousel${id} .slide`);
          let startInterval: any = null;

          trigger.addEventListener("mouseover", () => {
            toggleImages();
            startInterval = setInterval(toggleImages, interval);
          });

          trigger.addEventListener("mouseout", () => {
            clearInterval(startInterval);
            count = 0;
            for (let i: number = 1; i < slidesLength; i++) {
              slides[i].style.zIndex = "0";
              slides[i].style.opacity = "0";
              slides[i].style.transform = "scale(1)";
            }
            slides[0].style.zIndex = "1";
            slides[0].style.opacity = "1";
            slides[0].style.transform = "scale(1.2)";
          });

          return () => clearInterval(startInterval);
        }
      }
    }
  });

  if (error.length > 0) {
    return <p className="error">Error found</p>;
  }

  return (
    <div id = {`react-carousel${id}`} className="react-carousel">
      {label}
      <div id={`carousel${id}`} className="carousel">
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
