/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar.jsx";
import Product from "../components/Product.jsx";
import { BsUpcScan } from "react-icons/bs";
import Category from "../components/Category.jsx";
import { FiPlusCircle, FiMinusCircle, FiTrash2, FiEdit } from "react-icons/fi";
import useFunction from "../function/useFunction.js";
import { AuthContext } from "../context/AuthProvider.jsx";

const HomePage = () => {
  const { cart, countTotal } = useContext(AuthContext);

  const totalsum = () => {
    let tex = 0.05 * countTotal;
  };

  return (
    <div className="flex justify-center gap-4">
      <div className="flex-initial w-1/2">
        <Navbar></Navbar>

        <div className="relative overflow-x-auto sm:rounded-lg py-1 px-5 rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-400">
            <tbody>
              {cart?.map((item, index) => (
                <tr key={index} className="bg-white border   hover:bg-gray-50 ">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <div className="flex gap-2 items-center">
                      <FiEdit />
                      {item?.name}
                    </div>
                  </th>
                  <td className="px-6 py-4">${item?.price}</td>
                  <td className="px-6 py-4">
                    {" "}
                    <div className="flex justify-center items-center gap-3">
                      {" "}
                      <FiMinusCircle />
                      <span>{item?.quantity}</span>
                      <FiPlusCircle />{" "}
                    </div>
                  </td>
                  <td className="px-6 py-4">$299</td>
                  <td className="px-6 py-4 text-right">
                    <FiTrash2 />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-end flex-col p-5">
          <div className="flex justify-between w-1/3 border-t p-2">
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase ">
              Sub Total
            </h5>
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-900 uppercase ">
              ${countTotal}
            </h5>
          </div>
          <div className="flex justify-between w-1/3 border-t p-2">
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase ">
              TAX
            </h5>
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-900 uppercase ">
              ${0.05 * countTotal}
            </h5>
          </div>
          <div className="flex justify-between w-1/3 border-t p-2">
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase ">
              Shipping
            </h5>
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-900 uppercase ">
              $60
            </h5>
          </div>
          <div className="flex justify-between w-1/3 border-t p-2">
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-blue-700 uppercase ">
              Discount on Cart
            </h5>
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-900 uppercase ">
              $0
            </h5>
          </div>
        </div>
        <div className="px-5 pb-2">
          <button
            className="text-[#7a85ce] flex items-center justify-between gap-2 bg-[#e7e9f6] font-medium rounded-md text-sm px-5 py-4 w-full"
            type="button"
          >
            <span>Product Count(13)</span>
            <div className="w-1/3 flex items-center justify-between">
              <div className="text-xl font-bold text-blue-700 uppercase">total</div>
              <div className="text-xl font-bold text-blue-700 uppercase">$5005.50</div>
            </div>
          </button>
        </div>
        <div className="flex gap-4 p-5">
          <button
            className="text-red-500 font-bold flex items-center gap-2 bg-red-200 hover:bg-red-400 hover:text-white rounded-md text-sm px-5 py-3 transition-colors duration-300"
            type="button"
          >
            Cancel
          </button>
          <button
            className="text-[#5c6ac4] flex items-center gap-2 bg-[#dee1f3] hover:bg-[#d6daf8] font-bold rounded-md text-sm px-5 py-3 transition-colors duration-300"
            type="button"
          >
            Hold
          </button>
          <button
            className="text-[#5c6ac4] flex items-center gap-2 bg-[#dee1f3] hover:bg-[#d6daf8] font-bold rounded-md text-sm px-5 py-3 transition-colors duration-300"
            type="button"
          >
            Discount
          </button>
          <button
            className="text-[#7a85ce] flex items-center gap-2 bg-[#e7e9f6] hover:bg-[#d6daf8] font-bold rounded-md text-sm px-5 py-3 transition-colors duration-300"
            type="button"
          >
            Pay Now
          </button>
        </div>
      </div>
      <div className="flex-initial w-1/2 border-l">
        <form className="w-full">
          <div className="relative shadow-lg">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 19l-4-4M15 8a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:outline-none focus:border-gray-0 focus:bg-white focus:ring-0 focus:ring-gray-0"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button type="submit" className="absolute end-2.5 bottom-4 text-gray-500 font-medium rounded-lg text-3xl">
              <BsUpcScan />
            </button>
          </div>
        </form>
        <Category />
        <Product></Product>
      </div>
    </div>
  );
};

export default HomePage;
