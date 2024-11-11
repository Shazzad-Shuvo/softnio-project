// icons
import { RiDoubleQuotesL } from "react-icons/ri";

// images
import reviewSideImg from "../../assets/Vector (Stroke).png";

const TestimonialCard = ({ customerReview }) => {
  const { review, name, location, image } = customerReview;
  return (
    <div className="relative flex flex-col-reverse md:flex-row">
      {/* testimonial review */}
      <div className="flex flex-col justify-between bg-[#FEBF00] p-16">
        <div>
          <RiDoubleQuotesL className="inline-block"></RiDoubleQuotesL>
          <p className="">{review}</p>
        </div>
        <div className=" border-b-2 border-b-black pl-1 flex justify-between items-center">
          <div>
            <h4 className="font-bebas text-2xl">{name}</h4>
            <p>{location}</p>
          </div>
          <span className="border-b-4 border-b-red-700">
            <img
              src={image}
              alt="Profile image"
              className="rounded-full w-12"
            />
          </span>
        </div>
      </div>
      {/* side design inside review comment */}
        <span className="absolute bottom-8">
          <img src={reviewSideImg} alt="" />
        </span>
      {/* testimonial video */}
      <div className="w-full h-auto mx-auto">
        <iframe
          //   width="764"
          //   height="556"
          className="w-full h-[315px] sm:h-[400px] md:h-[500px] lg:h-[556px]"
          src="https://www.youtube.com/embed/HS24PywYlxg?si=yCbxD1vu4CC2kxQs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TestimonialCard;
