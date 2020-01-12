import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/slider.scss";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiChevronLeft } from "@mdi/js";

interface ISlider {
  images: any[];
  id: string;
  margin?: number;
  isLink?: boolean;
}

const Slider: React.FC<any> = (
  { images, id, margin = 15, isLink = true }: ISlider,
  ...props
) => {
  //   const [count, setCount] = useState(0);

  // const [targetWidth, SetTargetWidth] = useState(0);
  // const [targetLen, SetTargetLen] = useState(0);

  useEffect(() => {
    let count: number = 0;
    let targetWidth: any = null;
    let targetLen: any = null;
    const container: any = document.querySelector(`#${id} .slider`);
    const target: any = container.querySelectorAll(".each-img-card");
    const prevBtn: any = document.querySelector(`#${id}prev`);
    const nextBtn: any = document.querySelector(`#${id}next`);
    targetWidth = target[0].offsetWidth;
    targetLen = target.length - 1;

    window.addEventListener("resize", () => {
      count = 0;
      container.style.transform = "translateX(0px)";
      targetWidth = target[0].offsetWidth;
      targetLen = target.length - 1;
      nextBtn.style.display = "block";
      prevBtn.style.display = "none";

      if (
        getSliderWidth(container) >
        target[target.length - 1].offsetLeft - count * targetWidth
      ) {
        nextBtn.style.display = "none";
      }
    });

    const getSliderWidth = (container: Element | null): any => {
      if (container) {
        const sliderWidth = container.clientWidth;
        return sliderWidth;
      }
      return container;
    };

    const onClickHandler = (container: any, target: any): any => {
      if (prevBtn !== undefined) {
        prevBtn.addEventListener("click", () => {
          if (count > 0) {
            // setCount(count - 1);
            count--;
            container.style.transform = `translateX(-${(targetWidth + margin) *
              count}px)`;
            nextBtn.style.display = "block";
            if (count === 0) {
              prevBtn.style.display = "none";
            }
          }
        });
      }

      if (nextBtn !== undefined) {
        nextBtn.addEventListener("click", () => {
          if (
            count < targetLen &&
            getSliderWidth(container) <
              target[target.length - 1].offsetLeft - count * targetWidth
          ) {
            count++;
            container.style.transform = `translateX(-${(targetWidth + margin) *
              count}px)`;
            prevBtn.style.display = "block";
            if (
              getSliderWidth(container) >
              target[target.length - 1].offsetLeft - count * targetWidth
            ) {
              nextBtn.style.display = "none";
            }
          }
        });
      }
    };

    if (
      getSliderWidth(container) >
      target[target.length - 1].offsetLeft - count * targetWidth
    ) {
      nextBtn.style.display = "none";
    }

    onClickHandler(container, target);
  }, [id, margin]);

  return (
    <div id={id + "container"} style={{ position: "relative" }}>
      <button id={id + "prev"} className="slider-btn prev">
        <Icon path={mdiChevronLeft} size={1} />
      </button>
      <button id={id + "next"} className="slider-btn next">
        <Icon path={mdiChevronRight} size={1} />
      </button>
      <div
        id={id}
        className="slide"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="slider slider-4">
          {images.map((item, index) => (
            <div key={index} className="each-img-card">
              {isLink && (
                <Link to={item.url || ""}>
                  <figure>
                    <div className="img-slide vertical-md">
                      <img src={item.src} alt="stores" />
                      <span className="card-overlay"></span>
                    </div>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                </Link>
              )}
              {!isLink && (
                <div>
                  <figure>
                    <div className="img-slide vertical-md">
                      <img src={item.src} alt="stores" />
                      <span className="card-overlay"></span>
                    </div>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slider;
