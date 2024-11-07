import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";

import bgImage from '../../assets/header_bg.jpg'

const Home = () => {
  return (
    <div>
        {/* Header */}
      <div className="bg-contain" style={{backgroundImage: `url(${bgImage})`}}>
        <InnerContainer>
          <Navbar></Navbar>
          <Banner></Banner>
        </InnerContainer>
      </div>
    </div>
  );
};

export default Home;
