// -- core
import Slider from "react-slick";

// -- style carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atom/Button";

const HeroBanner = ({ data }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={style.banner}>
      <Slider {...settings}>
        {data.map((val, idx) => {
          return (
            <div key={idx}>
              <div className={style.item}>
                <div className="container">
                  <div className={style.wrapper}>
                    <div className={style.image}>
                      <img src={val.image} alt={val.title} />
                    </div>
                    <div className={style.text}>
                      <h2 className={style.title}>{val.title}</h2>
                      <p className={style.desc}>{val.desc}</p>
                      <div className={style.btn}>
                        <Button type="link" href={val.btn.to}>{val.btn.text}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroBanner;
