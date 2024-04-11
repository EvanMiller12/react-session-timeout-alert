import { useEffect, useRef } from "react";

// hook used for executing callback for anything clicked outside of the passed ref
const useOutsideClick = callback => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = event => {
      // Execute the callback function only when anything outside of the passed ref is clicked
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

export { useOutsideClick };
