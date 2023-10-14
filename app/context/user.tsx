"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { account, ID } from "@/libs/AppWriteClient";
import { useRouter } from "next/navigation";
import { UserContextTypes } from "../types";

const UserContext = createContext<UserContextTypes | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UserContext.Provider value={{ user, register, login, logout, checkUser }}>
      {children}
    </UserContext.Provider>
  );
};
