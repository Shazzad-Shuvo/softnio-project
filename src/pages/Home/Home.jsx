import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";

import bgImage from "../../assets/header_bg.jpg";
import About from "../../components/About/About";

const Home = () => {
  return (
    <div>
        {/* Header */}
      <div className="sticky top-0 w-full z-50 bg-cover bg-center bg-no-repeat bg-transparent" style={{backgroundImage: `url(${bgImage})`}}>
        <InnerContainer>
          <Navbar></Navbar>
          {/* <Banner></Banner> */}
        </InnerContainer>
      </div>
      <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bgImage})`}}>
        <InnerContainer>
          {/* <Navbar></Navbar> */}
          <Banner></Banner>
        </InnerContainer>
      </div>
      <div className="relative">
        <InnerContainer>
          <About></About>
        </InnerContainer>
      </div>
    </div>
  );
};

export default Home;
