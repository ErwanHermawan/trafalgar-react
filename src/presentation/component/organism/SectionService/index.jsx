// -- style
import style from "./style.module.scss";

// -- molecule
import ServiceCard from "presentation/component/molecule/ServiceCard";

// -- atom
import Button from "presentation/component/atom/Button";

const SectionService = ({ data }) => {
  console.log(data);
  return (
    <section className={style.service}>
      <div className="container">
        <div className={style.head}>
          <h3 className={style.title}>{data.title}</h3>
          <p className={style.desc}>{data.desc}</p>
        </div>
        <div className={style.body}>
          <div className={style.list}>
            {data.list.map((val, idx) => {
              return (
                <div className={style.item} key={idx}>
                  <ServiceCard
                    image={val.image}
                    title={val.title}
                    desc={val.desc}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.foot}>
          <Button variant="secondary" type="link" href={data.btn.to}>{data.btn.text}</Button>
        </div>
      </div>
    </section>
  );
};

export default SectionService;
