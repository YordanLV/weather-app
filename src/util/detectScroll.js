import debounce from "./debounce";

let lastScrollTop = 0;

export default function detectScroll() {
  window.addEventListener(
    "scroll",
    debounce(function() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        /* Transition all the way down to the screen  */
        window.scrollTo(0, document.body.scrollHeight);
      } else {
        /* Transiton all the way up to the screen  */
        window.scrollTo(0, 0);
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, 50)
  );
}
