"use client";

import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Register from "@/app/components/auth/Register";
import Login from "./auth/Login";
import { useGeneralStore } from "../stores/general";
import { Account } from "appwrite";
import { useRouter } from "next/router";
import { account } from "@/libs/AppWriteClient";

export default function AuthOverlay() {
  let { setIsLoginOpen } = useGeneralStore();
  let [isRegister, setIsRegister] = useState<boolean>(false);

  //const router = useRouter();

  const googleAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const session = account.createOAuth2Session(
        "google",
        `${window.location.origin}`
      );
      if (session) {
        window.location.href = session.pathname as string;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        id="AuthOverlay"
        className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
      >
        <div className="relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg">
          <div className="w-full flex justify-end">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="p-1.5 rounded-full bg-gray-100"
            >
              <AiOutlineClose size="26" />
            </button>
          </div>

          {isRegister ? <Register /> : <Login />}
          <div className="px-6 pb-2 mt-1.5">
            <button
              className="flex items-center justify-center w-full text-[17px] font-semibold bg-[#3D5A80] text-white py-3 rounded-sm"
              onClick={(e) => googleAuth(e)}
            >
              Login with Google
            </button>
          </div>

          <div className="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
            <span className="text-[14px] text-gray-600">
              Don’t have an account?
            </span>

            <button
              onClick={() => setIsRegister((isRegister = !isRegister))}
              className="text-[14px] text-[#3D5A80] font-semibold pl-1"
            >
              <span>{!isRegister ? "Register" : "log in"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
