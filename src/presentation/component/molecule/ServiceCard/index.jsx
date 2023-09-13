// -- style
import style from "./style.module.scss";

const ServiceCard = (props) => {
  const { image, title, desc } = props;

  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={image} alt={title} />
      </div>
      <div className={style.txt}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
