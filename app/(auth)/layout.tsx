import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) {redirect("/");}
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
