"use client";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import ReactTyped, { ReactTypedProps } from "react-typed";

const Typewriter = ({ typeSpeed = 40, ...props }: ReactTypedProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: "all", margin: "500px" });
  const [showCursor, setShowCursor] = useState(false);
  return (
    <span ref={ref}>
      {inView && (
        <ReactTyped
          typeSpeed={typeSpeed}
          {...props}
          onComplete={() => setShowCursor(false)}
          onStart={() => setShowCursor(true)}
          showCursor={showCursor}
        />
      )}
    </span>
  );
};

export default Typewriter;
