import React from "react";

function DropdownMenu({ open, onToggle, children }) {
  return (
    <>
      {open && (
        <ul
        //    className="dropdown-menu"
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onToggle })
          )}
        </ul>
      )}
    </>
  );
}

export default DropdownMenu;
``;
