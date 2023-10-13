"use client";
import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

const MotionProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LazyMotion strict features={domAnimation}>
      {children}
    </LazyMotion>
  );
};

export default MotionProvider;
