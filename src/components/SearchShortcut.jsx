// SearchShortcut.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchShortcut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the meta key (Command key on Mac) or control key (Ctrl key on Windows) and 'k' key are pressed
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        // Prevent the default behavior of the browser (e.g., focusing on the browser's search bar)
        event.preventDefault();
        
        // Trigger the click event of the "Search here" button
        const searchButton = document.getElementById("search-button");
        if (searchButton) {
          searchButton.click();
        }
      }
    };

    // Add event listener for keydown event
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default SearchShortcut;
