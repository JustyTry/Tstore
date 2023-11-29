import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [favs, setFavs] = useState(false);
  useEffect(() => {
    JSON.parse(localStorage.getItem("favorites")).length
      ? setFavs(true)
      : setFavs(false);
  }, []);
  window.addEventListener("storage", () => {
    JSON.parse(localStorage.getItem("favorites")).length
      ? setFavs(true)
      : setFavs(false);
  });
  return (
    <div className="w-full h-16 bg-gray-100 flex justify-between items-center px-4 mb-4 border-b-2 border-solid border-gray-600">
      <div className="max-md:block absolute w-3/12 hidden mr-4">
        <AiOutlineMenu className="w-6 h-6 text-gray-800" />
      </div>
      <div className="max-md:w-full w-3/12 text-center font-bold text-xl text-gray-800">
        <Link to="/">
          {t("logo")}
          <Trans></Trans>
        </Link>
      </div>
      <div className="max-md:hidden max-lg:w-4/12  w-3/12 max-w-full flex justify-between font-semibold text-xl">
        <div className="w-4/12 h-full text-center">
          <Link
            to="/all"
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-black
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300  hover:text-black "
          >
            {t("all")}
          </Link>
        </div>
        <div className="w-4/12 h-full text-center">
          <Link
            to="/men"
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-black
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300  hover:text-black"
          >
            {t("men")}
          </Link>
        </div>
        <div className="w-4/12 h-full text-center">
          {" "}
          <Link
            to="/women"
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-black
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300  hover:text-black "
          >
            {t("women")}
          </Link>
        </div>
      </div>
      <div className="max-md:hidden h-full  w-3/12 flex justify-center items-center">
        <div className="h-full flex items-center mx-2">
          <select
            defaultValue="en"
            className="bg-transparent"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">Eng</option>
            <option value="ru">Rus</option>
          </select>
        </div>
        <div className="w-fit text-center mx-2">
          <Link to="/favorites">
            {favs ? (
              <FaHeart className="w-6 h-6 text-pink-500" />
            ) : (
              <FaRegHeart className="w-6 h-6 text-gray-800" />
            )}
          </Link>
        </div>
        <div className="w-fit text-center">
          <Link to="/cart">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-800 hover:text-green-500 mx-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
