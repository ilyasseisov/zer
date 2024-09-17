// react hooks
import { useState } from "react";
import { useEffect } from "react";

// types
type mouseCoordinates = {
  x: number | null;
  y: number | null;
};

const useMousePosition = (): mouseCoordinates => {
  // hooks
  const [mousePosition, setMousePosition] = useState<mouseCoordinates>({
    x: null,
    y: null,
  });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};
export default useMousePosition;
