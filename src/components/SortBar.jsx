import React from "react";
import { useTranslation } from "react-i18next";

const SortBar = ({ setSortSize, setSortStyle, setSortType }) => {
  const [t] = useTranslation();
  return (
    <div className="w-full flex justify-center max-sm:flex-col max-md:items-center max-md:px-10">
      <select
        defaultValue=""
        onChange={(e) => setSortSize(e.target.value)}
        className="w-1/12 max-xl:w-2/12 max-md:w-3/12 max-sm:w-screen rounded-lg border-2 m-2 p-2 appearance-none text-center"
      >
        <option value="" disabled hidden>
          {t("size")}
        </option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
      </select>
      <select
        defaultValue=""
        onChange={(e) => setSortStyle(e.target.value)}
        className="w-1/12 max-xl:w-2/12 max-md:w-3/12 max-sm:w-screen rounded-lg border-2 m-2  p-2 appearance-none text-center"
      >
        <option value="" disabled hidden>
          {t("style")}
        </option>
        <option value="casual" className=" fill-red-800">
          Casual
        </option>
        <option value="bomber">Bomber</option>
        <option value="racer">Racer</option>
      </select>
      <select
        defaultValue=""
        onChange={(e) => setSortType(e.target.value)}
        className="w-1/12 max-xl:w-2/12 max-md:w-3/12 max-sm:w-screen rounded-lg border-2 m-2  p-2 appearance-none text-center"
      >
        <option value="" disabled hidden>
          {t("sort")}
        </option>
        <option value="xl">Newest</option>
        <option value="xl">A-Z</option>
        <option value="xl">Z-A</option>
        <option value="xl">Lowest price</option>
        <option value="xl">Highest price</option>
      </select>
    </div>
  );
};

export default SortBar;
