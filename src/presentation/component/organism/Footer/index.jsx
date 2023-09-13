// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- logo
import Logo from "presentation/component/atom/Logo";

// -- data dummy 
import data from "./footerData";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.menu}>
          {data.menu.map((val, idx) => {
            return (
              <div className={style.item} key={idx}>
                <h3 className={style.title}>{val.title}</h3>
                <ul className={style.nav}>
                  {val.nav.map((valItem, idItem) => {
                    return (
                      <li className={style.navItem} key={idItem}>
                        <Link className={style.link} href={valItem.to}>{valItem.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={style.about}>
          <Link className={style.logo} href={data.logo.to}>
            <Logo filename={data.logo.img} name={data.logo.alt} />
          </Link>
          <p className={style.desc}>{data.description}</p>
          <p className={style.copyright}>{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
