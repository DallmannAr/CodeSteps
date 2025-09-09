import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "./Layout";
import Home from "../pages/Home";
import Questions from "../pages/Question";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/questions" element={<Questions />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
}

export default AppRoutes;