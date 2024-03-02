import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { TiPlus } from "react-icons/ti";
import { FiPlusCircle } from "react-icons/fi";

const AddCustomer = () => {
  // State to track whether the drawer is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div className="px-5 pb-2">
        <button
          className="text-[#7a85ce] flex items-center justify-between gap-2 bg-[#e7e9f6] hover:bg-[#d6daf8] font-medium rounded-md text-sm px-5 py-2.5 w-full transition-colors duration-300"
          type="button"
          onClick={toggleModal}
        >
          <span className="flex items-center gap-2">
            {" "}
            <RxAvatar className="text-2xl" /> Steve Jobs
          </span>
          <FiPlusCircle className="text-2xl" />
        </button>
      </div>
      {/* modal */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity bg-slate-300 bg-opacity-50 border-2 duration-700 ease-in-out shadow-lg overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        {/* <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity bg-transparent duration-700 ease-in-out shadow-lg overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      > */}
        <div className="relative p-5 w-full max-w-2xl max-h-full">
          <div className="relative bg-white bg-opacity-100 rounded-lg  border-opacity-50 shadow-2xl">
            <div className="flex items-center justify-center p-5 border-b rounded-t ">
              <h3 className="text-2xl text-center font-semibold text-gray-900 px-5">Add New Customer</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={() => setIsModalOpen(false)}
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div className="px-5 py-2">
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border-b border-gray-300 text-gray-900 text-lg focus:outline-none focus:border-gray-0 focus:bg-white focus:ring-0 focus:ring-gray-0 block w-full p-2"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="px-5 py-2">
                <input
                  type="email"
                  id="first_name"
                  className="bg-gray-50 border-b border-gray-300 text-gray-900 text-lg focus:outline-none focus:border-gray-0 focus:bg-white focus:ring-0 focus:ring-gray-0 block w-full p-2"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="px-5 py-2">
                <input
                  type="tel"
                  id="first_name"
                  className="bg-gray-50 border-b border-gray-300 text-gray-900 text-lg focus:outline-none focus:border-gray-0 focus:bg-white focus:ring-0 focus:ring-gray-0 block w-full p-2"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="px-5 py-2">
                <input
                  type="tel"
                  id="first_name"
                  className="bg-gray-50 border-b border-gray-300 text-gray-900 text-lg focus:outline-none focus:border-gray-0 focus:bg-white focus:ring-0 focus:ring-gray-0 block w-full p-2"
                  placeholder="Currency"
                  required
                />
              </div>
              <div className="px-5 py-2">
                <input
                  type="tel"
                  id="first_name"
                  className="bg-gray-50 border-b border-gray-300 text-gray-900 text-lg focus:outline-none focus:border-gray-0 focus:bg-white focus:ring-0 focus:ring-gray-0 block w-full p-2"
                  placeholder="TAX ID"
                  required
                />
              </div>
              <div className="flex items-center cursor-pointer text-lg font-semibold px-5 py-2">
                {" "}
                <TiPlus /> Add More Details
              </div>
              <div className="w-full px-5 py-2">
                <button
                  className="text-white flex items-center justify-center gap-2 w-full bg-[#3674d9] font-bold rounded-md text-xl px-5 py-4 transition-colors duration-300"
                  type="button"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
