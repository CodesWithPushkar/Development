import { Link } from "react-router-dom";
const SidebarItem = ({Icon, label, isSideBarOpen, url}) => {
    return (
        <Link to={url || "#"} className={`flex items-center w-full hover:bg-[#272727] rounded-lg transition-all
        ${isSideBarOpen ? `gap-4 px-3 py-2` 
        : `flex-col justify-center py-4 gap-1`
        }`}>
            <Icon className="text-2xl"/> 
            <span className={isSideBarOpen ? "text-sm" : "text-[10px]"}>{label}</span>          
        </Link>
    )
}

export default SidebarItem;

