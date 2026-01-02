import React, { useState } from "react";

function Accordion({ children}) {
  const [active, setActive] = useState(null);
//   console.log(children);
  return (
    <>
      {/* <div className="accordion" id="accordionExample">
        {children}
      </div> */}
      <div className="accordion" id="accordionExample">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isOpen: active == index,
            onToggle: () => setActive(index),
          })
        )}
      </div>
    </>
  );
}

export default Accordion;
