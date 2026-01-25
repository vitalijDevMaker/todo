import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import { TodoPage } from "./pages/TodoPage/TodoPage";

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
