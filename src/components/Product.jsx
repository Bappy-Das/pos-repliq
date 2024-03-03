import { useContext } from "react";
import tShirtModel from "../assets/images/Model-T-shirt.jpg";
import { AuthContext } from "../context/AuthProvider";
// import useFunction from "../function/useFunction";

const Product = () => {
  const { addToCart } = useContext(AuthContext);
  const addCart = (name, price, quantity) => {
    addToCart(name, price, quantity);
  };
  return (
    <div className="flex justify-center flex-col">
      <div>
        <div className="p-5 grid grid-cols-5 gap-4">
          <div
            onClick={() => addCart("Pure White Polo", 43, 1)}
            className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit"
          >
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
          <div className="group max-w-sm bg-white border border-gray-200 rounded-md shadow cursor-pointer h-fit">
            <img className="rounded-md group-hover:opacity-95" src={tShirtModel} alt="" />
            <div className="text-center">
              <h5 className="py-2 text-xl font-bold tracking-tight text-gray-500 group-hover:text-gray-700">$43</h5>
              <h5 className="text-xl p-1 font-medium tracking-tight text-gray-500 border-t md:text-sm md:font-bold md:py-2 group-hover:text-gray-700">
                Pure White Polo
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
