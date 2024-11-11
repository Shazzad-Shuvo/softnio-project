

const FoodCard = ({food}) => {
  return (
    <div className="bg-white py-8 px-12 text-center">
      <div className="flex justify-center">
        <img src={food.img} alt="burger image" />
      </div>
      <span className="flex justify-center my-5">
        <hr className="border-4 border-[#BD1F17] w-1/2" />
      </span>
      <h2 className="font-bebas text-xl">{food.title}</h2>
      <p>{food.subtitle}</p>
    </div>
  );
};

export default FoodCard;
