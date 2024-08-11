import React from "react";

function MyDateComponent() {
  return (
    <div>
      {new Date().toLocaleDateString()} {/* Display current date */}
    </div>
  );
}

export default MyDateComponent;
