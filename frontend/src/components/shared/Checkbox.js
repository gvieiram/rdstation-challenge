import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        {...props}
        className={`form-checkbox h-[14px] w-[14px] accent-blue-dark-200 ${props.className}`}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
