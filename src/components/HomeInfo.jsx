import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi I am <span className="font-semibold">Jeff</span>👋
      <br />A Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="Code wrangler turning caffeine into groundbreaking tech at AZ!"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Crafting digital magic: From lines of code to awe-inspiring projects."
      link="/projects"
      btnText="visit my portfolio"
    />
  ),
  4: (
    <InfoBox text="Need a project done" link="/contact" btnText="Let's talk" />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
