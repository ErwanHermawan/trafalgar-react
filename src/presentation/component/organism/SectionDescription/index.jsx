// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atom/Button";

const SectionDescription = ({ data, reverse, icon }) => {
  let variantStyle = style.sectionDescription;
	if (reverse) {
		variantStyle += " " + style.reverse;
	}

  return (
    <section className={variantStyle}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.image}>
            <img
              src={data.image}
              alt={data.title}
            />
          </div>
          <div className={style.text}>
            <div className={style.wrapper}>
              <h2 className={style.title}>{data.title}</h2>
              <p className={style.desc}>{data.desc}</p>
              <Button
                type='link'
                href={data.btn.to}
                icon={icon}
                variant='secondary'>
                {data.btn.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDescription;
