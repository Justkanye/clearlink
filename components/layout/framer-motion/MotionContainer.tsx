"use client";
import { m, Variants } from "framer-motion";
import { ReactNode } from "react";

const MotionContainer = ({
  children,
  variants,
  initial = "hidden",
  animate,
  whileInView = "show",
  className,
  as = "div",
  id,
}: MotionContainerProps) => {
  // @ts-expect-error
  const Wrapper = m[as];
  return (
    <Wrapper
      id={id}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      variants={variants}
      className={className}
    >
      {children}
    </Wrapper>
  );
};

export default MotionContainer;

type MotionContainerProps = {
  children: ReactNode;
  variants: Variants;
  initial?: string;
  animate?: string;
  whileInView?: string;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  id?: string;
};
