import React from 'react';
import { CardContainer, ColumnContainer, ColumnTitle } from './styles';

function App() {
  return (
    <div className="App">
      <ColumnContainer>
        <ColumnTitle>Todo</ColumnTitle>
        <CardContainer>First Item</CardContainer>
        <CardContainer>Second Item</CardContainer>
        <CardContainer>Third Item</CardContainer>
      </ColumnContainer>
    </div>
  );
}

export default App;
