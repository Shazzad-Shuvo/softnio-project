import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import InnerContainer from "../../containers/InnerContainer/InnerContainer";

import About from "../../components/About/About";
import PopularFood from "../../components/PopularFood/PopularFood";
// image
import headerBgImage from "../../assets/header_bg.jpg";
import bookTableBgImage from "../../assets/book_table.png";
import BookTable from "../../components/BookTable/BookTable";
import Testimonials from "../../components/Testimonials/Testimonials";
import footerBgImage from "../../assets/footer_bg_image.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <div
        className="sticky top-0 w-full z-50 bg-cover bg-center bg-no-repeat bg-transparent"
        style={{ backgroundImage: `url(${headerBgImage})` }}
      >
        <InnerContainer>
          <Navbar></Navbar>
        </InnerContainer>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerBgImage})` }}
      >
        <InnerContainer>
          <Banner></Banner>
        </InnerContainer>
      </div>
      <div className="relative">
        <InnerContainer>
          <About></About>
        </InnerContainer>
      </div>
      <div className="relative bg-[#FBF7F2]">
        <InnerContainer>
          <PopularFood></PopularFood>
        </InnerContainer>
      </div>
      <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bookTableBgImage})` }}
      >
        <InnerContainer>
          <BookTable></BookTable>
        </InnerContainer>
      </div>
      <div className="relative">
        <InnerContainer>
          <Testimonials></Testimonials>
        </InnerContainer>
      </div>
      <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${footerBgImage})` }}
      >
        <div className=" inset-0 bg-black/80">
          <InnerContainer>
            <Footer></Footer>
          </InnerContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
