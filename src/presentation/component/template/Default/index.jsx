// --- components
import Header from "presentation/component/organism/Header";
import Footer from "presentation/component/organism/Footer";

// --- style
import style from "./style.module.scss";

const Default = ({ activeMenu, children }) => {
  return (
    <>
      <Header activeMenu={activeMenu} />
      <main className={style.default}>{children}</main>
      <Footer />
    </>
  );
};

export default Default;
