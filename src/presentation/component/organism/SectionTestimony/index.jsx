// -- style
import style from "./style.module.scss";

// -- molecule
import TestimonyCard from "presentation/component/molecule/TestimonyCard";

const SectionTestimony = ({ data }) => {
  return (
    <section className={style.testimony}>
      <div className="container">
        <div className={style.box}>
          <div className={style.head}>
            <h3 className={style.title}>{data.title}</h3>
          </div>
          <div className={style.body}>
            {data.list.map((val, idx) => {
              return (
                <div className={style.item} key={idx}>
                  <TestimonyCard image={val.image} name={val.name} position={val.position} desc={val.desc} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimony;
