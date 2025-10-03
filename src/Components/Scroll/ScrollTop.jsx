import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Page top par scroll kare
  }, [pathname]);

  return null; // Ye component koi UI render nahi karega
};

export default ScrollToTop;
