import React from "react";
import { functionListData } from "./functionsSlice";
import { FunctionListItem } from "./functionListItem";
import { Button } from "../../components/Button";

export const FunctionList = (Props: {
  functions: functionListData;
  onAdd: () => void;
  onDelete: (index: number) => void;
  onEdit: (index: number, newValue: string) => boolean;
}) => {
  return (
    <div className="flex flex-col">
      {Props.functions.map((func, index) => (
        <FunctionListItem
          key={func.id}
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
