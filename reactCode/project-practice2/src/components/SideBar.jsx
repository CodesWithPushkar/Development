import { SiYoutubeshorts } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { TfiDownload } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { CgMusicNote } from "react-icons/cg";
import { MdMovie } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { IoFlagOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import SidebarItem from "../components/Button";

    const mainLinks = [
        { icon: AiFillHome, label: "Home", url: "/" },
        { icon: SiYoutubeshorts, label: "Shorts", url: "/shorts" },
        { icon: MdOutlineSubscriptions, label: "Subscriptions", url: "/feed/subscriptions" }
    ];

    const youLinks = [
        { icon: LuHistory, label: "History" },
        { icon: CgPlayList, label: "Playlists" },
        { icon: MdOutlineWatchLater, label: "Watch later" },
        { icon: BiLike, label: "Liked videos" },
        { icon: TfiDownload, label: "Downloads" },
        { icon: MdKeyboardArrowDown, label: "Show More" }
    ];

    const exploreLinks = [
        { icon: LuShoppingBag, label: "Shopping" },
        { icon: CgMusicNote, label: "Music" },
        { icon: MdMovie, label: "Movies" },
        { icon: MdKeyboardArrowDown, label: "Show More" }
    ];

    const moreFromYoutubeLinks = [
        { icon: CgMusicNote, label: "Music" },
        { icon: MdMovie, label: "Movies" },
        { icon: MdKeyboardArrowDown, label: "Show More" },
        { icon: MdKeyboardArrowDown, label: "Show More" }
    ];

    const settingsLinks = [
        { icon: LuSettings, label: "Settings" },
        { icon: IoFlagOutline, label: "Report History" },
        { icon: MdOutlineHelpOutline, label: "Help" },
        { icon: MdOutlineFeedback, label: "Send Feedback" }
    ];

    const miniSideBar = [
        {icon: AiFillHome, label: "Home"},
        {icon: SiYoutubeshorts, label: "Shorts"},
        {icon: MdOutlineSubscriptions, label: "Subscriptions"},
        {icon: LuHistory, label: "You"},
    ];


const Sidebar = ({isSideBarOpen}) => {
    return <>
        {isSideBarOpen ? ( 
                <div className="flex flex-col w-60 overflow-y-auto pb-4 custom-scrollbar">
                    
                    
                    <div className="p-3 flex flex-col gap-1">
                        {mainLinks.map((link, index) => {
                            return (<SidebarItem 
                                key={index}
                                Icon={link.icon}
                                label={link.label}
                                url={link.url}
                                isSideBarOpen={isSideBarOpen}
                            />)
                        })}
                    </div>

                    <hr className="bg-gray-700 border-none h-[1px] my-2 mx-3"/>

                    {/* Section 2: You */}
                    
                    <div className="p-3 flex flex-col gap-1">
                        <button className="px-3 py-2 flex items-center w-full hover:bg-[#272727] rounded-lg font-bold gap-4 text-lg">
                            You <MdKeyboardArrowRight className="text-2xl"/>
                        </button>
                       {youLinks.map((link, index) => {
                            return (<SidebarItem 
                                key={index}
                                Icon={link.icon}
                                label={link.label}
                                isSideBarOpen={isSideBarOpen}
                            />)
                       })}
                    </div>

                    <hr className="bg-gray-700 border-none h-[1px] my-2 mx-3"/>

                    {/* Section 3: Explore */}
                    <div className="p-3 flex flex-col gap-1">
                        {exploreLinks.map((link, index) => {
                            return (<SidebarItem 
                                key={index}
                                Icon={link.icon}
                                label={link.label}
                                isSideBarOpen={isSideBarOpen}
                            />)
                        })}
                    </div>

                    <hr className="bg-gray-700 border-none h-[1px] my-2 mx-3"/>

                    {/* Section 4: More from YouTube */}
                    <div className="p-3 flex flex-col gap-1">
                        <div className="px-3 py-2 flex items-center gap-4 font-bold">
                            More from YouTube
                        </div>
                        {moreFromYoutubeLinks.map((link, index) => {
                            return (<SidebarItem 
                                key={index}
                                Icon={link.icon}
                                label={link.label}
                                isSideBarOpen={isSideBarOpen}
                            />)
                        })}
                    </div>

                    <hr className="bg-gray-700 border-none h-[1px] my-2 mx-3"/>

                    {/* Section 5: Settings */}
                    <div className="p-3 flex flex-col gap-1">
                        {settingsLinks.map((link, index) => {
                            return (<SidebarItem 
                                key={index}
                                Icon={link.icon}
                                label={link.label}
                                isSideBarOpen={isSideBarOpen}
                            />)
                        })}
                    </div>

                </div>
                
                ) : (
                    
                // --- MINI SIDEBAR ---
                <div className="flex flex-col w-[72px] items-center pt-3 gap-2 overflow-y-auto">
                    {miniSideBar.map((link, index) => {
                        return <SidebarItem 
                                key={index}
                                Icon={link.icon}
                                label={link.label}
                                isSideBarOpen={isSideBarOpen}
                        />
                    })}
                </div>
                )}
    </>
}

export default Sidebar;