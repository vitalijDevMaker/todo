import { Router, Route, Routes } from "react-router-dom";
import { TodoPage } from "./pages/TodoPage/TodoPage";
import LoginPage  from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
