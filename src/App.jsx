import { TimeDisplay } from "./components/TimeDisplay";
import { ContextoProvider } from "./context/ContextoProvider";
import { TimeLength } from "./components/TimeLength";

function App() {
  return (
    <ContextoProvider>
      <TimeLength />
      <TimeDisplay />
    </ContextoProvider>
  );
}

export default App;
