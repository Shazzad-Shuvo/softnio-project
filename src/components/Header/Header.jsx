import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

import bgImage from "../../assets/header_bg.jpg";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <InnerContainer>
        <Navbar></Navbar>
        <Banner></Banner>
      </InnerContainer>
    </div>
  );
};

export default Header;
