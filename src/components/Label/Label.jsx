import React from "react";

export const Label = ({ label, htmlFor, labelStyle }) => {
  return (
    <label htmlFor={htmlFor} style={labelStyle}>
      {label}
    </label>
  );
};
