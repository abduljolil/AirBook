import { Outlet } from "react-router-dom";
import Naber from "../Pages/shered/Naber";
 
 

 
const MainLayout = () => {
    return (
        <div>
            <div>
      
            </div>
          <Naber></Naber>
            <Outlet></Outlet>
        
        </div>
    );
};

export default MainLayout;