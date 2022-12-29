import { useState } from "react";
import { AddItemButton, NewItemFormContainer, NewItemInput } from "../styles";
import { useFocus } from "../utils/userFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <AddItemButton onClick={() => onAdd(text)}>Create</AddItemButton>
    </NewItemFormContainer>
  );
};
