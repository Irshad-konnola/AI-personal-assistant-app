"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { GetAuthUserData } from "@/services/GlobalApi";
const SignIn = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      if (typeof window !== undefined) {
        localStorage.setItem("user_token", tokenResponse.access_token);
      }

      const user = GetAuthUserData(tokenResponse.access_token);
      console.log(user);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center flex-col  gap-5 rounded-2xl p-10 shadow-md">
        <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
        <h2 className="text-2xl">Sign In To AI Personal Assistant & Agent</h2>
        <Button className="" onClick={() => googleLogin()}>
          Sign in with Gmail
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
