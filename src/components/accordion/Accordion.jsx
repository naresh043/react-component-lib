import React, { useState,Children,cloneElement } from "react";

function Accordion({ children }) {
  const [active, setActive] = useState(null);
  return (
    <div className="accordion" id="accordionExample">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: active == index,
          onToggle: () => setActive(index),
        })
      )}
    </div>
  );
}

export default Accordion;
