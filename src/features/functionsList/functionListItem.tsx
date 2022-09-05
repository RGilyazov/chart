import React from "react";
import { functionItemData } from "./functionsSlice";
import { Button } from "../../components/Button";

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
    <div className="flex flex-row align-baseline border-b-2 border-gray-200 border-solid">
      <input
        className="flex-1 italic font-bold text-blue-900 "
        value={Props.function.value}
        onChange={handleChange}
      ></input>
      <Button onClick={handleDelete} caption="delete" />
    </div>
  );
};
