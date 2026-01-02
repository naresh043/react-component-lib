import React from "react";

function RadioGroup({ children, onChange, value, name }) {
  return (
    <div >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onChange,
          name,
          selectedValue: value,
        })
      )}
    </div>
  );
}

export default RadioGroup;
