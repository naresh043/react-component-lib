import React from "react";

function AccordionPanel({ children, isOpen }) {
  return (
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
}

export default AccordionPanel;
