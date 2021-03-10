import MainScreen from "./components/MainScreen";
import { useState } from "react";
function App() {
  const screenConfig = useState(0);
  return (
    <div>
      <MainScreen currentScreen={screenConfig} />
    </div>
  );
}

export default App;
