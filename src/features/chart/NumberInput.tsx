import React from "react";

export const NumberInput = (props: {
  value: number;
  onEdit: (newValue: number) => void;
}) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    props.onEdit(Number(e.currentTarget.value));
  };
  return (
    <input
      type="number"
      className="flex-1 italic font-bold text-blue-900 "
      value={props.value ? props.value : ""}
      onChange={handleChange}
    ></input>
  );
};
