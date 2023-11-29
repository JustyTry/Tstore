import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-gray-100 flex justify-between flex-col items-center h-fit pt-4">
      <div className="max-md:w-screen flex justify-around w-6/12 text-center">
        <h4 className="w-4/12 font-medium">Switch language</h4>
        <h4 className="w-4/12 font-medium">100% secure payment</h4>
        <h4 className="w-4/12 font-medium">Follow us:</h4>
      </div>
      <div className="max-md:w-screen flex w-6/12 justify-around text-center mt-4">
        <div className="w-4/12 h-14 overflow-hidden text-center flex justify-center items-center">
          <select
            defaultValue="en"
            className="w-8/12 bg-transparent text-center"
          >
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
        </div>
        <div className="w-4/12 h-14 overflow-hidden text-center flex justify-center items-center">
          <img
            src="https://freepngimg.com/thumb/categories/1394.png"
            className="h-20"
            alt=""
          />{" "}
        </div>
        <div className="w-4/12 h-14 text-center overflow-hidden flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
            alt=""
            className="w-6 h-6 mx-2 rounded-md"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
            alt=""
            className="w-6 h-6 mx-2 rounded-md"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            alt=""
            className="w-6 h-6 mx-2 rounded-md"
          />
        </div>
      </div>
      <div className="mt-6 h-12 flex items-center justify-center w-full  bg-gray-200">
        © All rights reserved by Tstore {currentYear}
      </div>
    </div>
  );
};

export default Footer;
