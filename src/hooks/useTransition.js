import { useState, useEffect, useCallback } from "react";

import debounce from "util/debounce";

const useTransition = () => {
  let lastScrollTop = 0;
  const [position, setPosition] = useState("initial");
  console.log("object");
  const memoizedCallbackPosition = useCallback(() => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setPosition("details");
    } else {
      setPosition("initial");
    }
  }, [lastScrollTop]);

  useEffect(() => {
    const debounceTime = 50;
    window.addEventListener(
      "scroll",
      debounce(memoizedCallbackPosition, debounceTime)
    );
    return () =>
      window.removeEventListener(
        "scroll",
        debounce(memoizedCallbackPosition, debounceTime)
      );
  }, [memoizedCallbackPosition]);

  return position;
};

export default useTransition;
