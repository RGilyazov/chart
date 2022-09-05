import React from "react";
import { functionItemData } from "./functionsSlice";

export const FunctionListItem = (Props: {
  function: functionItemData;
  id: number;
  onDelete: (index: number) => void;
  onEdit: (index: number, newValue: functionItemData) => boolean;
}) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    Props.onEdit(Props.id, { value: e.currentTarget.value.toString() });
  };
  const handleDelete = (e: React.FormEvent<HTMLButtonElement>) => {
    Props.onDelete(Props.id);
  };

  return (
    <div>
      <input value={Props.function.value} onChange={handleChange}></input>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};
