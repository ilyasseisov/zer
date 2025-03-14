// useState
import { useState } from "react";
// useEffect
import { useEffect } from "react";

const useResourceLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create a list of all resources to wait for
    const resourcePromises = [];

    // 1. Wait for DOM content
    const domContentLoaded = new Promise((resolve) => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve(null);
      }
    });
    resourcePromises.push(domContentLoaded);

    // 2. Wait for images
    const imagePromises = Array.from(document.images).map((img) => {
      return new Promise((resolve) => {
        if (img.complete) {
          resolve(null);
        } else {
          img.addEventListener("load", () => resolve(null));
          img.addEventListener("error", () => resolve(null));
        }
      });
    });
    resourcePromises.push(...imagePromises);

    // 3. Wait for fonts if available
    if (document.fonts) {
      resourcePromises.push(document.fonts.ready);
    }

    // Wait for all resources and add minimum delay
    Promise.all(resourcePromises)
      .then(() => {
        // Minimum 1 second delay
        return new Promise((resolve) => setTimeout(resolve, 1000));
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setIsLoading(false);
      });

    // Fallback timeout - force hide loader after 10 seconds
    const fallbackTimeout = setTimeout(() => {
      console.log("Fallback timeout triggered");
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return isLoading;
};

export default useResourceLoading;
