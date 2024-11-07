
const BtnPrimary = ({text, style}) => {
    return (
        <button className={`bg-[#FEBF00] text-black py-3 px-5 font-bold uppercase text-sm lg:text-base ${style}`}>
            {text}
        </button>
    );
};

export default BtnPrimary;