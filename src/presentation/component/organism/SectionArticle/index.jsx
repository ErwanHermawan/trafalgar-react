// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atom/Button";

// -- molecule
import ArticleCard from "presentation/component/molecule/ArticleCard";

const SectionArticle = ({ data }) => {
  return (
    <section className={style.article}>
      <div className='container'>
        <div className={style.head}>
          <h2 className={style.title}>{data.title}</h2>
        </div>
        <div className={style.body}>
          <div className={style.list}>
            {data.list.map((val, idx) => {
              return (
                <div className={style.item} key={idx}>
                  <ArticleCard to={val.to} image={val.image} title={val.title} desc={val.desc} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.foot}>
          <Button type='link' href={data.btn.to} variant='secondary'>
            {data.btn.text}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionArticle;
