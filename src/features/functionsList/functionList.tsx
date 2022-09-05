import React from "react";
import { functionListData, functionItemData } from "./functionsSlice";
import { FunctionListItem } from "./functionListItem";
import { Button } from "../../components/Button";

export const FunctionList = (Props: {
  functions: functionListData;
  onAdd: () => void;
  onDelete: (index: number) => void;
  onEdit: (index: number, newValue: functionItemData) => boolean;
}) => {
  return (
    <div className="flex flex-col">
      {Props.functions.map((func, index) => (
        <FunctionListItem
          id={index}
          function={func}
          onEdit={Props.onEdit}
          onDelete={Props.onDelete}
        />
      ))}
      <div>
        {" "}
        <Button onClick={Props.onAdd} caption="Add" />
      </div>
    </div>
  );
};
