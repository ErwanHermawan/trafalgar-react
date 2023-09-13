// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "presentation/component/atom/SystemIcon";
import ButtonText from "presentation/component/atom/ButtonText";

const ArticleCard = (props) => {
  const { to, image, title, desc } = props;

  return (
    <article className={style.card}>
      <Link className={style.link} href={to}></Link>
      <div className={style.image}>
        <img src={image} alt={title} />
      </div>
      <div className={style.text}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.desc}>{desc}</p>
        <ButtonText type="button" className={style.button}>
          Read More
          <SystemIcon name='arrow-right' />
        </ButtonText>
      </div>
    </article>
  );
};

export default ArticleCard;
