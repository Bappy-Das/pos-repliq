import { useState } from "react";
import { FaAlignJustify, FaAlignLeft } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { TbTruckDelivery, TbDeviceIpadPause } from "react-icons/tb";
import { SlNote } from "react-icons/sl";
import { MdMotionPhotosPaused } from "react-icons/md";
import logo from "../assets/images/logo.png";
import AddCustomer from "./AddCustomer";
import { MdOutlineDashboard } from "react-icons/md";
import { IoLocation, IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  // State to track whether the drawer is open or closed
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="text-center py-5">
        <div className="flex gap-4">
          <button className="font-medium rounded-lg text-sm px-5 py-2.5" type="button" onClick={toggleDrawer}>
            {isDrawerOpen ? <FaAlignLeft className="text-xl" /> : <FaAlignJustify className="text-xl" />}
          </button>
          <button
            className="text-[#7a85ce] flex items-center gap-2 bg-[#e7e9f6] hover:bg-[#d6daf8] font-bold rounded-md text-sm px-5 py-2.5 transition-colors duration-300"
            type="button"
          >
            <SlNote className="text-xl" />
            Note
          </button>
          <button
            className="text-[#7a85ce] flex items-center gap-2 bg-[#e7e9f6] hover:bg-[#d6daf8] font-bold rounded-md text-sm px-5 py-2.5 transition-colors duration-300"
            type="button"
          >
            <TbTruckDelivery className="text-xl" />
            Shipping
          </button>
          <button
            className="text-[#7a85ce] flex items-center gap-2 bg-[#e7e9f6] hover:bg-[#d6daf8] font-bold rounded-md text-sm px-5 py-2.5 transition-colors duration-300"
            type="button"
          >
            <MdMotionPhotosPaused className="text-xl" />
            Hold Orders
          </button>
          <button
            className="text-[#7a85ce] flex items-center gap-2 bg-[#e7e9f6] hover:bg-[#d6daf8] font-bold rounded-md text-sm px-5 py-2.5 transition-colors duration-300"
            type="button"
          >
            <FiPlusCircle className="text-xl" />
            New Items
          </button>
        </div>
      </div>
      {/* add customer */}
      <AddCustomer />
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="bg-[#efefef] p-4">
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="py-5">
            <p>Location:</p>
            <h1 className="text-gray-900 text-xl font-medium">Los Angeles, California</h1>
          </div>
          <button
            type="button"
            onClick={toggleDrawer}
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm py-5 absolute top-2.5 end-2.5 inline-flex items-center"
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div className="p-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 hover:bg-[#eef0f9] rounded-lg group">
                <MdOutlineDashboard />
                <span className="ms-3 text-xl font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#eef0f9]  group">
                <IoLocation />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl font-medium">Locations</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#eef0f9] group">
                <TbDeviceIpadPause />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl font-medium">POS Invoices</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#eef0f9] group">
                <IoSettingsOutline />
                <span className="flex-1 ms-3 whitespace-nowrap text-xl font-medium">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
