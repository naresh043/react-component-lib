import React from "react";

function AccordionItem({ children, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { isOpen, onToggle })
      )}
    </div>
  );
}

export default AccordionItem;
