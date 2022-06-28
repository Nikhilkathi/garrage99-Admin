import React from "react";

const AddProducts = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-4 grid-rows-1 mt-5 pl-80 px-10">
        <div>
          <label
            htmlFor="#"
            className="block text-sm font-medium text-gray-700"
          >
            Product_ID
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="product_id"
              id="product_name"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="#"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="product_name"
              id="product_name"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>
      {/* Second row */}
      <div className="grid gap-4 grid-cols-4 grid-rows-1 mt-3 pl-80 px-10">
        <div>
          <div>
            <label
              htmlFor="#"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <div className="mt-1">
              <select className="block w-full p-0 sm:text-sm">
                <option>----select-----</option>
                <option>Car Exterior</option>
                <option>Car Interior</option>
                <option>Care & Maintance</option>
                <option>car Audio & Electronics</option>
                <option>Riding Gears</option>
                <option>Bike Accessories</option>
                <option>Bike OEM</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label
              htmlFor="#"
              className="block text-sm font-medium text-gray-700"
            >
              Sub Category
            </label>
            <div className="mt-1">
              <select className="block w-full p-0 sm:text-sm">
                <option>----select-----</option>
                <option>Car Exterior</option>
                <option>Car Interior</option>
                <option>Care & Maintance</option>
                <option>car Audio & Electronics</option>
                <option>Riding Gears</option>
                <option>Bike Accessories</option>
                <option>Bike OEM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Third row */}
      {/*<div className="grid gap-3 grid-cols-4 grid-rows-1 mt-3 pl-80 px-10">
         <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Vendor
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full p-0 sm:text-sm"
            placeholder="Enter Vendor"
          />
        </div>
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Quantity
          </label>
          <input
            type="number"
            name="name"
            id="name"
            className="block w-full p-0 sm:text-sm"
            placeholder="Last 4 Digits SS no."
          />
        </div>
      </div> */}
      <div className="grid gap-3 grid-cols-4 grid-rows-1 mt-3 pl-80 px-10"></div>
      {/* Fourth row */}
      <div className="grid gap-3 grid-cols-4 grid-rows-1 mt-3 pl-80 px-10">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Product Images
          </label>
          <div className="mt-1">
            <input
              type="file"
              name="product_img"
              id="product_img"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-3 grid-cols-4 grid-rows-1 mt-3 pl-80 px-10">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Product Images
          </label>
          <div className="mt-1">
            <input
              type="file"
              name="product_img"
              id="product_img"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-3 text-center sm:px-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddProducts;
