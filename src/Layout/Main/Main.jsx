import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
  return (
    // <div className="max-w-[90rem] mx-auto">
    //     <Outlet></Outlet>
    // </div>

    <div>
      
      <div className="max-w-[120rem] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
