import React from 'react';
import { AppContainer} from './styles';
import { Column } from "./components/Column"
import { AddNewItem } from './components/AddNewItem';

function App() {
  return (
    <AppContainer>
      <Column text="Todo"/>
        <AddNewItem toggleButtonText="+ Add another list" onAdd={() => console.log("Item added")}/>
    </AppContainer>
  );
}

export default App;
