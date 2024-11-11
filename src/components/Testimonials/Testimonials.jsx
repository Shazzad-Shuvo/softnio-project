// components
import SectionHeading from "../SectionHeading/SectionHeading";
import TestimonialCard from "./TestimonialCard";

// reviewData
import reviews from "../../uiData/reviewData";

// side images
import leftSideImage from "../../assets/testimonial-side-img-left.png";
import rightSideImage from "../../assets/testimonial-side-img-right.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

// import required modules
import { EffectCube, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <div className="py-10 lg:py-24 px-5">
      <div className="flex justify-between items-center">
        <SectionHeading
          tagLine='"Crispy, Every Bite Taste'
          heading="What Some of my Customers Say"
        ></SectionHeading>

        {/* left side image */}
        <div className="hidden lg:block absolute left-0">
          <img src={leftSideImage} className="max-w-[100px]" alt="" />
        </div>

        {/* swiper navigation buttons */}
        <div className="absolute md:static bottom-10 left-1/2 transform -translate-x-1/2 md:transform-none z-10">
          <button className="swiper-button-prev-custom p-3 mx-4 border rounded-full border-transparent shadow-lg">
            <IoIosArrowBack className="hover:text-[#BD1F17] text-lg"></IoIosArrowBack>
          </button>
          <button className="swiper-button-next-custom p-3 border rounded-full border-transparent shadow-lg">
            <IoIosArrowForward className="hover:text-[#BD1F17] text-lg"></IoIosArrowForward>
          </button>
        </div>
      </div>

      {/* right side image */}
      <div className="hidden lg:block absolute right-0 bottom-0">
          <img src={rightSideImage} className="" alt="" />
        </div>

      {/* swiper */}
      <Swiper
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // navigation={true}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 30,
        //   },
        // }}
        modules={[EffectCube, Navigation]}
        className="mySwiper my-20 md:my-8 w-full"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <TestimonialCard customerReview={review}></TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
