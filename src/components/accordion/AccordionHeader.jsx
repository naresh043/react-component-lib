import React, { Children } from "react";

function AccordionHeader({ onToggle, isOpen, id, children }) {
      return (
    <h2 className="accordion-header" onClick={onToggle}>
      <button className="accordion-button" type="button">
        {children}
      </button>
    </h2>
  );
}

export default AccordionHeader;
