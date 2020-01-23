import { useState, useEffect, useCallback } from "react";

import debounce from "util/debounce";
import scrollToBottom from "util/scrollToBottom";

const useTransition = () => {
  let lastScrollTop = 0;
  const [position, setPosition] = useState("initial");

  const memoizedCallbackPosition = useCallback(() => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      /* Transition all the way DOWN to the screen  */
      // window.scrollTo(0, document.body.scrollHeight);
      setPosition("details");
    } else {
      // /* Transiton all the way UP to the screen  */
      // window.scrollTo(0, 0);
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth"
      // });
      setPosition("initial");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    lastScrollTop = st <= 0 ? 0 : st;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
