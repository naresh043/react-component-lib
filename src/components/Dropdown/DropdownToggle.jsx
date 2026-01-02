import React from "react";

function DropdownToggle({ onToggle, label }) {
  return (
    <button
      className="btn btn-secondary dropdown-toggle"
      onClick={onToggle}
    >
      {label}
    </button>
  );
}

export default DropdownToggle;
