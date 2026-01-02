import React from "react";

function Dropdown({ children, open, onToggle }) {
  return (
    <div
     className="dropdown"
     >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { open, onToggle })
      )}
    </div>
  );
}

export default Dropdown;
