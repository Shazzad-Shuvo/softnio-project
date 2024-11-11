// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// image
import aboutImage from "../../assets/about_img.png";
import aboutSideImage from "../../assets/about_side_img.png";
import BtnPrimary from "../btnPrimary/BtnPrimary";

// icon
import { LuPhoneCall } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { IoRibbonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import RadialProgress from "../RadialProgress/RadialProgress";

const About = () => {
  const tabClass = "bg-[#B52B1D] text-white";

  return (
    <div className="my-10 lg:my-24 px-5">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 relative">
          <img src={aboutImage} className="w-[620px]" alt="About Image" />
          <RadialProgress style='absolute top-6 left-4'></RadialProgress>
        </div>
        {/* tabs */}
        <div className="flex-1">
          <Tabs>
            <TabList className="border-b-2 border-red-500">
              <Tab selectedClassName={tabClass}>About</Tab>
              <Tab selectedClassName={tabClass}>Experience</Tab>
              <Tab selectedClassName={tabClass}>Contact</Tab>
            </TabList>

            <TabPanel>
              <div>
                <h1 className="text-4xl font-bebas mt-5">
                  Exceptional culinary <br /> experience and delicious food
                </h1>
                <p className="my-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                  sit amet consectetur adipiscing elit do eiusmod tempor
                  incididunt ut labore et dolore magna minim veniam nostrud
                  exercitation.
                </p>
                <div className="flex items-center gap-10">
                  <BtnPrimary text="Know more"></BtnPrimary>
                  <span className="flex items-center gap-2">
                    <LuPhoneCall className="text-2xl text-[#B52B1D]"></LuPhoneCall>
                    <p className="font-semibold">+88 3426 739 485</p>
                  </span>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <h1 className="text-4xl font-bebas mt-5">
                  7+ years & 50+ <br /> events served with delicious food
                </h1>
                <p className="my-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                  sit amet consectetur adipiscing elit do eiusmod tempor
                  incididunt ut labore et dolore magna minim veniam nostrud
                  exercitation.
                </p>
                <div className="flex items-center gap-10">
                  <BtnPrimary text="Know more"></BtnPrimary>
                  <span className="flex items-center gap-2">
                    <LuPhoneCall className="text-2xl text-[#B52B1D]"></LuPhoneCall>
                    <p className="font-semibold">+88 3426 739 485</p>
                  </span>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <h1 className="text-4xl font-bebas mt-5">
                  Gent in touch <br /> to savor our delicious food
                </h1>
                <p className="my-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                  sit amet consectetur adipiscing elit do eiusmod tempor
                  incididunt ut labore et dolore magna minim veniam nostrud
                  exercitation.
                </p>
                <div className="flex items-center gap-10">
                  <BtnPrimary text="Know more"></BtnPrimary>
                  <span className="flex items-center gap-2">
                    <LuPhoneCall className="text-2xl text-[#B52B1D]"></LuPhoneCall>
                    <p className="font-semibold">+88 3426 739 485</p>
                  </span>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/* side image */}
      <div className="hidden lg:block absolute right-0 -translate-y-40">
        <img src={aboutSideImage} className="max-w-[150px]" alt="" />
      </div>
      {/* Key Points section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="flex gap-5 items-center">
          <span className="p-5 border rounded-full border-transparent shadow-lg">
            <BsBoxSeam className="text-3xl text-[#BD1F17]"></BsBoxSeam>
          </span>
          <span>
            <h2 className="font-bebas text-2xl">Fast Delivery</h2>
            <p>Within 30 minutes</p>
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <span className="p-5 border rounded-full border-transparent shadow-lg">
            <IoRibbonOutline className="text-3xl text-[#BD1F17]"></IoRibbonOutline>
          </span>
          <span>
            <h2 className="font-bebas text-2xl">absolute dining</h2>
            <p>Best buffet restaurant</p>
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <span className="p-5 border rounded-full border-transparent shadow-lg">
            <FiShoppingBag className="text-3xl text-[#BD1F17]"></FiShoppingBag>
          </span>
          <span>
            <h2 className="font-bebas text-2xl">pickup delivery</h2>
            <p>Grab your food order</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
