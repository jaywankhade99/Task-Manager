import TaskManager from "./TaskManager";
import { Provider } from "react-redux";
import appStore from "./store";


function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <h1 className="p-4 text-2xl bg-slate-400j shadow-lg">Task manager</h1>
      <TaskManager/>
    </div>
    </Provider>
  );
}

export default App;
