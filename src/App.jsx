import { TimeDisplay } from "./components/TimeDisplay";
import { ContextoProvider } from "./context/ContextoProvider";
import { TimeLength } from "./components/TimeLength";

function App() {
  return (
    <ContextoProvider>
      <h1 className="App_mainTitle">Pomodoro Clock🍅</h1>
      <TimeLength />
      <TimeDisplay />
    </ContextoProvider>
  );
}

export default App;
