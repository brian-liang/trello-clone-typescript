import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import { CustomDragLayer } from "./components/CustomDragLayer";

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {/* @ts-ignore */}
      <CustomDragLayer>
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id} />
        ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(text) => dispatch(addList(text))}
        />
      </CustomDragLayer>
    </AppContainer>
  );
}

export default App;
