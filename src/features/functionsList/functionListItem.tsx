import React from "react";
import { functionItemData } from "./functionsSlice";
import { Button } from "../../components/Button";

export const FunctionListItem = (Props: {
  function: functionItemData;
  id: number;
  onDelete: (index: number) => void;
  onEdit: (index: number, newValue: string) => boolean;
  onColorEdit: (index: number, newValue: string) => void;
}) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    Props.onEdit(Props.id, e.currentTarget.value.toString());
  };
  const handleDelete = (e: React.FormEvent<HTMLButtonElement>) => {
    Props.onDelete(Props.id);
  };

  const handleColorChange = (e: React.FormEvent<HTMLInputElement>) => {
    Props.onColorEdit(Props.id, e.currentTarget.value);
  };
  return (
    <div className="flex flex-row items-center border-b-2 border-gray-200 border-solid">
      <input
        type="color"
        onChange={handleColorChange}
        value={Props.function.color}
      ></input>
      <input
        placeholder="write a function"
        className="flex-1 italic font-bold text-blue-900 "
        value={Props.function.value}
        onChange={handleChange}
      ></input>
      {!Props.function.correct && (
        <div className="text-red-500 font-bold mr-2 ml-2">
          function is incorrect.
        </div>
      )}
      <Button onClick={handleDelete} caption="delete" />
    </div>
  );
};
