import React from "react";
import { functionListData, functionItemData } from "./functionsSlice";
import { FunctionListItem } from "./functionListItem";

export const FunctionList = (Props: {
  functions: functionListData;
  onAdd: () => void;
  onDelete: (index: number) => void;
  onEdit: (index: number, newValue: functionItemData) => boolean;
}) => {
  return (
    <div>
      {Props.functions.map((func, index) => (
        <FunctionListItem
          id={index}
          function={func}
          onEdit={Props.onEdit}
          onDelete={Props.onDelete}
        />
      ))}
      <button onClick={Props.onAdd}>add</button>
    </div>
  );
};
