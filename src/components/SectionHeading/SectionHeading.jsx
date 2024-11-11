import { FaSquareFull } from "react-icons/fa";

const SectionHeading = ({ tagLine, heading, text, styleClass }) => {
  return (
    <div>
      <span className="flex items-center gap-3 text-[#BD1F17]">
        <FaSquareFull className="text-xs"></FaSquareFull>{" "}
        <p className="font-semibold">{tagLine}</p>
      </span>
      <span className={`${styleClass}`}>
        <h1 className="text-4xl font-bebas mt-5">{heading}</h1>
        <p className="mt-5 w-1/2">{text}</p>
      </span>
    </div>
  );
};

export default SectionHeading;
