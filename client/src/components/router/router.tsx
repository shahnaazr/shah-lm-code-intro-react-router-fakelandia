import { Route, Routes } from "react-router-dom";
import {Home} from "../home/home";
import {Confession} from "../confession/confession";
import {Misdemeanours} from "../misdemeanours/misdemeanours";
import { NotFound } from "../not_found/not_found";
import MainLayout from "../layout/main_layout";

export const Router: React.FC = () => {
    return (
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/confession" element={<Confession />} />
        <Route path="/misdemeanours" element={<Misdemeanours />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
  };
  export default Router;