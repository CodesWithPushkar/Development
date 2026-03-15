import NavBar from "../components/nav";
import Sidebar from "../components/SideBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const YoutubeLayout = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const location = useLocation();
    return <>
         <div className="bg-black min-h-screen overflow-hidden">
            <NavBar setIsSideBarOpen={setIsSideBarOpen}/>
            <div className="flex text-white h-[calc(100vh-56px)]">
               <Sidebar isSideBarOpen={isSideBarOpen}/>
                <div className={`flex-1 overflow-x-hidden ${location.pathname==="/shorts" ? "p-1" : "pt-3 px-4"}`}>
                    {children}
                </div>
            </div>
        </div>
    </>
}

export default YoutubeLayout;

