import { FaSquareFull } from "react-icons/fa";
import FoodCard from "../FoodCard/FoodCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// image
import popularFoodSideImage from "../../assets/popular_food_side_img.png";

// icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

// ui data
import foods from "../../uiData/foodCardData";
import SectionHeading from "../SectionHeading/SectionHeading";

const PopularFood = () => {
  return (
    <div className="py-10 lg:py-24 px-5">
      {/* popular food text */}
      <div className="flex justify-between items-center">
        {/* section heading */}
        <SectionHeading 
        tagLine='Crispy, Every Bite Taste'
        heading='POPULAR FOOD ITEMS'
        ></SectionHeading>

        <div className="absolute md:static bottom-10 left-1/2 transform -translate-x-1/2 md:transform-none">
          <button className="swiper-button-prev-custom p-3 mx-4 border rounded-full border-transparent shadow-lg">
            <IoIosArrowBack className="hover:text-[#BD1F17] text-lg"></IoIosArrowBack>
          </button>
          <button className="swiper-button-next-custom p-3 border rounded-full border-transparent shadow-lg">
            <IoIosArrowForward className="hover:text-[#BD1F17] text-lg"></IoIosArrowForward>
          </button>
        </div>
      </div>

      {/* side image */}
      <div className="hidden lg:block absolute left-0">
        <img src={popularFoodSideImage} className="max-w-[150px]" alt="" />
      </div>

      {/* swiper */}
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper my-8 w-full"
      >
        {foods.map((food) => (
          <SwiperSlide key={food.id}>
            <FoodCard food={food}></FoodCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularFood;
