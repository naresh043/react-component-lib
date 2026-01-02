import React from "react";

function DropdownItem({ children, onSelect, value, onToggle }) {
  return (
    <li
      onClick={() => {
        onSelect(value);
        onToggle();
      }}
    >
      <div className="dropdown-item">{children}</div>
    </li>
  );
}

export default DropdownItem;
