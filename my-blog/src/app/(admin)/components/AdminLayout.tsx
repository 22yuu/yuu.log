"use client";

import { ReactNode, useEffect, useState } from "react";
import AdminSidePanel from "./AdminSidePanel";
import { LoginContextProps, useLoginContext } from "@/contexts/LoginProvider";
import Login from "@/components/admin/Login";
import { getAccessToken } from "@/api/auth";
import { UserInfo } from "@/types/user";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const {
    user: { accessToken, user },
    loginLoading,
    setLoginLoading,
    setUser,
  } = (useLoginContext() as LoginContextProps) || {};

  const isLogined = window && localStorage.getItem("isLogined");
  const isGuest = window && localStorage.getItem("isGuest");

  useEffect(() => {
    const getToken = async () => {
      const user = await getAccessToken(accessToken!);
      return user;
    };

    if (isLogined) {
      getToken().then((userInfo: UserInfo) => {
        console.log(userInfo);
        setUser(userInfo);
        setLoginLoading(true);
      });
    }

    if (isGuest) {
      setUser({
        user: {
          username: "Guest",
          role: "guest",
        },
      });
      setLoginLoading(true);
    }
  }, []);

  if (!user && !isLogined) {
    return <Login />;
  }

  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full text-theme-text">
        {loginLoading ? (
          <>
            {/* admin side panel */}
            <AdminSidePanel />
            {/* contents */}
            {children}
          </>
        ) : (
          "loading...!"
        )}
      </div>
    </div>
  );
}
