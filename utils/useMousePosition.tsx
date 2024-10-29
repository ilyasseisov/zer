// react hooks
import { useState } from "react";
import { useEffect } from "react";

// types
type mouseCoordinates = {
  x: number | null;
  y: number | null;
};

const useMousePosition = (): mouseCoordinates & { scrollY: number } => {
  // hooks
  const [mousePosition, setMousePosition] = useState<mouseCoordinates>({
    x: null,
    y: null,
  });
  const [scrollY, setScrollY] = useState<number>(0);

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const updateScrollPosition = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return { x: mousePosition.x, y: mousePosition.y, scrollY };
};
export default useMousePosition;
