import { Routes, Route } from "react-router-dom";
import Group from "./pages/Group";
import GroupDetail from "./pages/GroupDetail";
import GroupInfoCard from "./components/Card/GroupInfoCard";
import MemoryInfoCard from "./components/Card/MemoryInfoCard";
// import MemoryDetail from "./pages/MemoryDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Group />} />
          <Route path=":GroupId" element={<GroupDetail />} />
        </Route>
        {/* <Route path="/memory/1" element={<MemoryDetail />} /> */}
      </Routes>
    </>
  );
}

export default App;
