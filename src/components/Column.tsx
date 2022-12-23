import { ColumnContainer, ColumnTitle } from "../styles"
import { AddNewItem } from "./AddNewItem"
import { Card } from "./Card"

type ColumnProps = {
    text: string
}

export const Column = ({text}: ColumnProps) => {
    return(
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text="Generate app scaffold"/>
            <Card text="Learn TypeScript"/>
            <Card text="Begin to use static typing"/>
            <AddNewItem onAdd={() => console.log("Card added")} toggleButtonText="+ Add another card" dark={true}/>
        </ColumnContainer>
    )
}
