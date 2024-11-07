import { useContext, useEffect, useState } from "react";

// react icons
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import toast, { Toaster } from "react-hot-toast";

const Navbar2 = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
//   const { user, logOut } = useContext(AuthContext);

  // Close side navbar on "esc" key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setSideNavOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         console.log("Logged Out Successfully");
//         toast.success("User Logged Out");
//         setSideNavOpen(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

  return (
    <div className="flex justify-between items-center p-8 w-full h-20 bg-cyan-400 relative">
      <h2 className="font-semibold text-4xl">TaskEeez</h2>

      {/* Hamburger icon */}
      {/* className="text-2xl opacity-100 visible md:opacity-0 md:invisible transition-opacity duration-700 ease-in-out */}
      <div className="flex justify-center items-center gap-5">
        
          <Link to="/taskboard">
            <button>Go to Taskboard</button>
          </Link>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        <FaBars
          className="text-2xl"
          onClick={() => setSideNavOpen(!sideNavOpen)}
        ></FaBars>
      </div>

      {/* sidebar */}
      <div
        className={`fixed top-0 right-0 w-full  md:w-[35%] lg:w-[30%] h-screen bg-rose-300 p-8 transition-all duration-500 ease-in-out z-30 ${
          sideNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <IoCloseSharp
            className="text-4xl text-right"
            onClick={() => setSideNavOpen(!sideNavOpen)}
          />
        </div>

        {/* side nav menu */}
        <ul>
          <li>
            <Link to="/" onClick={() => setSideNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/taskboard" onClick={() => setSideNavOpen(false)}>
              Taskboard
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={() => setSideNavOpen(false)}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop for blur effect */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-500 ease-in-out z-20 ${
          sideNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSideNavOpen(false)} // Close sidebar when clicking on the blurred area
      ></div>
      {/* <Toaster /> */}
    </div>
  );
};

export default Navbar2;
