import React from "react";

export const NumberInput = (props: {
  value: number;
  caption?: string;
  id?: string;
  onEdit: (newValue: number) => void;
}) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    props.onEdit(Number(e.currentTarget.value));
  };
  return (
    <div>
      <label className="font-bold mr-2" htmlFor={props.id}>
        {props.caption}
      </label>
      <input
        id={props.id}
        type="number"
        className="flex-1 italic font-bold text-blue-900 "
        value={props.value ? props.value : ""}
        onChange={handleChange}
      ></input>
    </div>
  );
};
