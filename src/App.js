import {
  Routes,
  Route
} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import MainLayout from "./layouts/MainLayout/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />
    </Routes>
  );
}

export default App;
