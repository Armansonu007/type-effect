import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedEffect = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: ["coder", "writer", "thinker"],
        typeSpeed: 50,
        loop: true,
        loopCount: Infinity
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span ref={typedRef}></span>;
};

export default TypedEffect;
