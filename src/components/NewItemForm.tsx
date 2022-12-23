import { useState } from "react"
import { AddItemButton, NewItemFormContainer, NewItemInput } from "../styles"

type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState("")

    return(
        <NewItemFormContainer>
            <NewItemInput value={text} onChange={(e)=>setText(e.target.value)}/>
            <AddItemButton onClick={()=>onAdd(text)}>Create</AddItemButton>
        </NewItemFormContainer>
    )
}