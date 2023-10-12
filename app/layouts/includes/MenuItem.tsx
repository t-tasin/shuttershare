"use client";

import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiLiveLine } from "react-icons/ri";

import { MenuItemsTypes } from "@/app/types";

export default function MenuItem({
  iconString,
  colorString,
  sizeString,
}: MenuItemsTypes) {
  const icons = () => {
    if (iconString == "For You")
      return <BiHomeAlt size={sizeString} color={colorString} />;
    if (iconString == "Following")
      return <HiOutlineUserGroup size={sizeString} color={colorString} />;
    if (iconString == "LIVE")
      return <RiLiveLine size={sizeString} color={colorString} />;
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
