import BtnPrimary from "../btnPrimary/BtnPrimary";
import SectionHeading from "../SectionHeading/SectionHeading";

const BookTable = () => {
  return (
    <div className="py-10 lg:py-24 px-5">
      <SectionHeading
        tagLine="Book Now"
        heading="Book Your Table"
        text="Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus."
        styleClass="text-white"
      ></SectionHeading>
      <form className="w-full md:w-2/3 lg:w-1/2 mt-6">
      {/* name & email */}
        <div className="flex flex-col md:flex-row gap-5 my-5">
            <input type="text" placeholder="Your Name*" className="p-4 bg-transparent text-white flex-1 border border-white" />
            <input type="text" placeholder="Your Email" className="p-4 bg-transparent text-white flex-1 border border-white"/>
        </div>
        {/* reservation date and total people */}
        <div className="flex flex-col md:flex-row gap-5 my-5">
            <input type="date" placeholder="Reservation Date" className="p-4 bg-transparent text-white flex-1 border border-white" />
            <input type="number" placeholder="Total People" className="p-4 bg-transparent text-white flex-1 border border-white"/>
        </div>
        <div className="gap-5 my-5">
            {/* <input type="date" placeholder="Reservation Date" className="p-4 bg-transparent text-white flex-1 border border-white" /> */}
            <textarea name="" rows='5' placeholder="Message" className="w-full p-4 bg-transparent text-white border border-white"></textarea>
        </div>
        <BtnPrimary text='book now'></BtnPrimary>
      </form>
    </div>
  );
};

export default BookTable;
