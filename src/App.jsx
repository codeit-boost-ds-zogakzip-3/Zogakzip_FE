import { Routes, Route } from "react-router-dom";
import Group from "./pages/Group";
import GroupDetail from "./pages/GroupDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Group />} />
          <Route path=":GroupId" element={<GroupDetail />} />
        </Route>
        {/* <Route path="/" element={<Group />} /> */}
      </Routes>
    </>
  );
}

export default App;
