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
    x: -1,
    y: -1,
  });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Function to get the initial position
    const setInitialMousePosition = () => {
      const { clientX, clientY } = document.body.getBoundingClientRect();
      setMousePosition({ x: clientX, y: clientY });
    };

    // Add event listener to update position
    window.addEventListener("mousemove", updateMousePosition);

    // Manually trigger an update for the initial position
    setInitialMousePosition();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return { x: mousePosition.x, y: mousePosition.y };
};
export default useMousePosition;
