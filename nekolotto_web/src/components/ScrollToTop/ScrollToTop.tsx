import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      window.scrollTo(0, 0);
    }

    return () => {
      isCancelled = true;
    };
  }, [pathname]);

  return null;
}
