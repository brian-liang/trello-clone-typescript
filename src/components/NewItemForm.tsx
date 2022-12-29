import React, { useState } from "react";
import { AddItemButton, NewItemFormContainer, NewItemInput } from "../styles";
import { useFocus } from "../utils/userFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <AddItemButton onClick={() => onAdd(text)}>Create</AddItemButton>
    </NewItemFormContainer>
  );
};
