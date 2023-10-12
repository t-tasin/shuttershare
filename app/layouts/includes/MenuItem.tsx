"use client";

import { AiFillHome } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";

import { MenuItemsTypes } from "@/app/types";

export default function MenuItem({
  iconString,
  colorString,
  sizeString,
}: MenuItemsTypes) {
  const icons = () => {
    if (iconString == "For You")
      return <AiFillHome size={sizeString} color={colorString} />;
    if (iconString == "Following")
      return <FaUserGroup size={sizeString} color={colorString} />;
    if (iconString == "LIVE")
      return <FaVideo size={sizeString} color={colorString} />;
  };
  return (
    <>
      <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
        <div className="flex items-center lg:mx-0 mx-auto">
          {icons()}

          <p
            className={`lg:block hidden pl-[9px] mt-0.5 font-semibold text-[${colorString}]`}
          >
            {iconString}
          </p>
        </div>
      </div>
    </>
  );
}
