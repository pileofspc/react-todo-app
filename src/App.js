import TodoWidget from './TodoWidget';

function App() {
  function doThings() {
    
  }

  return (
    <>
      <button onClick={doThings}>Add Todo</button>
      <TodoWidget />
    </>
  );
}

export default App;
