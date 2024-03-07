import { Outlet } from "react-router-dom";
import Naber from "../Pages/shered/Naber";
import Footer from "../Pages/shered/Footer";
 
 

 
const MainLayout = () => {
    return (
        <div>
          <Naber></Naber>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default MainLayout;