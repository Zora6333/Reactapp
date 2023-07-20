import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ImageSlider/ImageSlider.css";

const ImageSlider = () => {
const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1
};

return (
<Slider {...settings}>

<img
src={require("./src/page/Customfurniture/img/Page_3/Group 29.jpg")}
alt="Slide 1"
/>


<img
src={require("./src/page/Customfurniture/img/Page_3/Group 28.jpg")}
alt="Slide 2"
/>


<img
src={require("./src/page/Customfurniture/img/Page_3/IMG_5628 1.jpg")}
alt="Slide 3"
/>


<img
src={require("./src/page/Customfurniture/img/Page_3/IMG_5669 1.jpg")}
alt="Slide 4"
/>


<img
src={require("./src/page/Customfurniture/img/Page_3/IMG_5694 1.jpg")}
alt="Slide 5"
/>


<img
src={require("./src/page/Customfurniture/img/Page_3/IMG_5697 1.jpg")}
alt="Slide 6"
/>


<img
src={require("./src/page/Customfurniture/img/Page_3/IMG_5778 1.jpg")}
alt="Slide 7"
/>


<img
src={require("./src/page/Customfurniture/img/Page_3/IMG_5822 1.jpg")}
alt="Slide 8"
/>


<img
src={require("./src/page/Customfurniture/img/Page_3/IMG_5907 1.jpg")}
alt="Slide 9"
/>


);
};
export default ImageSlider;