import BtnPrimary from "../btnPrimary/BtnPrimary";

import bannerImg from "../../assets/banner_img.png";
import offer from "../../assets/offer.png";
import star from "../../assets/star.png";

const Banner = () => {
  return (
    <div>
      <div className="relative py-8 md:py-24 lg:py-40 px-5 flex flex-col md:flex-row gap-8 md:gap-0 items-center">
        <div className="z-10 text-white ">
          <h1 className="text-5xl md:text-7xl lg:text-8xl uppercase font-bebas md:bg-gradient-to-r from-[#BD1F1700] to-[#BD1F17B2] pr-5 py-5">
            Taste the authentic <br /> saudi cuisine
          </h1>
          <p className="mt-6">
            Among the best Saudi chefs in the world, serving <br /> you
            something beyond flavor.{" "}
          </p>
          <BtnPrimary text="Explore Menu" style="mt-6"></BtnPrimary>
        </div>
        {/* banner image */}
        <div className="md:absolute md:right-0 md:top-10 lg:right-0 lg:top-20">
          <img src={bannerImg} alt="banner image" className="max-w-[380px] lg:max-w-[600px] px-5 lg:px-0" />
          {/* star */}
          <div className="absolute bottom-1/2 translate-y-3 right-2 md:-top-10 lg:-top-10 lg:-right-8">
            <img src={star} alt="" className="" />
          </div>
          {/* todays offer */}
          <div className="absolute bottom-12 right-9 lg:bottom-0 lg:-right-10">
            <img src={offer} alt="" className="bg-[#FEBF00] rounded-full w-16 lg:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
