import React, { useEffect } from "react";
import '../FotoSlide/FotoSlide.css'


const FotoSlide = () => {
  useEffect(() => {
    const handleZoomIn = (event) => {
      const clickedImage = event.target;
      clickedImage.classList.add("zoomed-in");
      clickedImage.removeEventListener("click", handleZoomIn);
      clickedImage.addEventListener("click", handleZoomOut);
    };

    const handleZoomOut = (event) => {
      const clickedImage = event.target;
      clickedImage.classList.remove("zoomed-in");
      clickedImage.removeEventListener("click", handleZoomOut);
      clickedImage.addEventListener("click", handleZoomIn);
    };

    const zoomableImages = document.querySelectorAll(".zoomable-image");

    zoomableImages.forEach((image) => {
      image.addEventListener("click", handleZoomIn);
    });

    return () => {
      zoomableImages.forEach((image) => {
        image.removeEventListener("click", handleZoomIn);
        image.removeEventListener("click", handleZoomOut);
      });
    };
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slide">
        <img
          src="./src/page/Customfurniture/img/Page_3/IMG_6067 1.jpg"
          alt="Slide 1"
          className="zoomable-image"
        />
      </div>
      <div className="slide">
        <img
          src="./src/page/Customfurniture/img/Page_3/IMG_5628 1.jpg"
          alt="Slide 2"
          className="zoomable-image"
        />
      </div>
      <div className="slide">
        <img
          src="./src/page/Customfurniture/img/Page_3/IMG_5669 1.jpg"
          alt="Slide 3"
          className="zoomable-image"
        />
      </div>
      <div className="slide">
        <img
          src="./src/page/Customfurniture/img/Page_3/IMG_5694 1.jpg"
          alt="Slide 4"
          className="zoomable-image"
        />
      </div>
      <div className="slide">
        <img
          src="./src/page/Customfurniture/img/Page_3/IMG_5697 1.jpg"
          alt="Slide 5"
          className="zoomable-image"
        />
      </div>
      <div className="slide">
        <img
          src="./src/page/Customfurniture/img/Page_3/IMG_5778 1.jpg"
          alt="Slide 6"
          className="zoomable-image"
        />
      </div>
      <div className="slide">
        <img
          src="./src/page/Customfurniture/img/Page_3/IMG_5822 1.jpg"
          alt="Slide 7"
          className="zoomable-image"
        />
      </div>
    </div>
  );
};

export default FotoSlide;
