import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="min-w-screen min-h-screen flex justify-center items-center">{children}</div>;
};

export default AuthLayout;
