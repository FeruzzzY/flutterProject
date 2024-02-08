import React, { useEffect } from "react";

const OverflowHidden = ({ children }) => {
  useEffect(() => {
    // Set overflow to hidden when the component mounts
    document.body.style.overflow = "hidden";

    // Revert overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // Empty dependency array ensures this effect only runs once

  return <>{children}</>;
};

export default OverflowHidden;
