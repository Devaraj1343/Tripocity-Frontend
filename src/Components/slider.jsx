import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "../assets/Home-1.jpg";
import home2 from "../assets/img1.jpg";
import home3 from "../assets/img2.jpg";
import home4 from "../assets/img3.jpg";
import home5 from "../assets/img4.jpg";

export default function ImgSlider() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-[70vh] md:h-[80vh]">
        <Slider {...settings}>
          {[home1, home2, home3, home4, home5].map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`Slide ${i}`}
                className="w-full h-[70vh] md:h-[80vh] object-cover object-center"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
