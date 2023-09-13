import style from "./style.module.scss";

const TestimonyCard = (props) => {
  const { image, name, position, desc } = props;

  return (
    <div className={style.card}>
      <div className={style.profile}>
        <div className={style.avatar}>
          <img src={image} alt={name}/>
        </div>
        <div className={style.info}>
          <h3 className={style.name}>{name}</h3>
          <p className={style.position}>{position}</p>
        </div>
      </div>
      <div className={style.text}>
        <p className={style.desc}>"{desc}"</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
