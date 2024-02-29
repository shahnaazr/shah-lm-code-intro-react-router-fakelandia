import { Outlet } from "react-router-dom";
import Header from "../header/header";
import { MisdemeanoursContextProvider } from "../hooks/misdemeanours_context";

const MainLayout: React.FC = () => {
return (
    <>
    <Header/>
    <main>
        <MisdemeanoursContextProvider>
          <Outlet />
        </MisdemeanoursContextProvider>
      </main>
    </>
);

}

export default MainLayout;