import { Route, Routes } from "react-router-dom";
import App from "../App";

const AppRoutes = () => {
    return ( 
        <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<App />} />
          {/* <Route path="/perfil/:id" element={<Profile />} /> */}
        </Route>

        {/* <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
     );
}
 
export default AppRoutes;