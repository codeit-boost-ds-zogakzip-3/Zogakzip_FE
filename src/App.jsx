import { Routes, Route } from "react-router-dom";
import Group from "./pages/Group";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Group />} />
      </Routes>
    </>
  );
}

export default App;
