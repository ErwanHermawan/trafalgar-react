// Components
import HeroBanner from "presentation/component/organism/HeroBanner";
import SectionService from "presentation/component/organism/SectionService";
import SectionDescription from "presentation/component/organism/SectionDescription";
import SectionTestimony from "presentation/component/organism/SectionTestimony";
import SectionArticle from "presentation/component/organism/SectionArticle";

// Templates Default
import Default from "presentation/component/template/Default";

// -- Dummy Data
import bannerData from "./bannerData";
import serviceData from "./serviceData";
import descriptionData from "./descriptionData";
import testimonyData from "./testimonyData";
import articleData from "./articleData";

const Home = () => {
  return (
    <Default activeMenu="home">
      <HeroBanner data={bannerData} />
      <SectionService data={serviceData} />
      <SectionDescription data={descriptionData.data1} />
      <SectionDescription data={descriptionData.data2} reverse={true} icon="arrow-down" />
      <SectionTestimony data={testimonyData} />
      <SectionArticle data={articleData} />
    </Default>
  );
};

export default Home;
