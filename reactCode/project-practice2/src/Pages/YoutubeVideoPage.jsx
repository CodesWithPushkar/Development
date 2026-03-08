import { useState } from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
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
import FilterNav from "../components/filterNav";
import VideoCard from "../components/videoCard";

const YoutubeLayout = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [isActiveLabel, setIsActiveLabel] = useState("All");

    const mainLinks = [
        { icon: AiFillHome, label: "Home" },
        { icon: SiYoutubeshorts, label: "Shorts" },
        { icon: MdOutlineSubscriptions, label: "Subscriptions" }
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


    const categories = [
    { label: "All" },
    { label: "Music" },
    { label: "Data Structures" },
    { label: "Mixes" },
    { label: "Podcasts" },
    { label: "Software Development" },
    { label: "JavaScript" },
    { label: "Source code" },
    { label: "Movie musicals" },
    { label: "Array" },
    { label: "Indian pop music" },
    { label: "T-Series" },
    { label: "Live" },
    { label: "Gaming" },
    { label: "News" },
    { label: "Sports" },
    { label: "Learning" },
    { label: "React" },
    { label: "Web Development" },
    { label: "Python" },
    { label: "Algorithms" },
    { label: "Artificial Intelligence" },
    { label: "Machine Learning" },
    { label: "CSS" },
    { label: "Node.js" },
    { label: "Next.js" },
    { label: "Cloud Computing" },
    { label: "Cybersecurity" },
    { label: "UI/UX Design" },
    { label: "Minecraft" },
    { label: "Grand Theft Auto" },
    { label: "Valorant" },
    { label: "BGMI" },
    { label: "E-sports" },
    { label: "Speedruns" },
    { label: "Action movies" },
    { label: "Stand-up Comedy" },
    { label: "Anime" },
    { label: "Vlogs" },
    { label: "Movie Reviews" },
    { label: "Physics" },
    { label: "Mathematics" },
    { label: "History" },
    { label: "Space exploration" },
    { label: "Biology" },
    { label: "Chemistry" },
    { label: "Astronomy" },
    { label: "Engineering" },
    { label: "Documentaries" },
    { label: "Cooking" },
    { label: "Baking" },
    { label: "Travel vloggers" },
    { label: "Fitness" },
    { label: "Yoga" },
    { label: "Meditation" },
    { label: "Photography" },
    { label: "Gadgets" },
    { label: "Tech reviews" },
    { label: "Cars" },
    { label: "Motorcycles" },
    { label: "DIY" },
    { label: "Woodworking" },
    { label: "Gardening" },
    { label: "Fashion" },
    { label: "Makeup" },
    { label: "Street food" },
    { label: "Personal Finance" },
    { label: "Investing" },
    { label: "Crypto" },
    { label: "Real Estate" },
    { label: "Entrepreneurship" },
    { label: "Marketing" },
    { label: "Economics" },
    { label: "Painting" },
    { label: "Digital Art" },
    { label: "Graphic Design" },
    { label: "Architecture" },
    { label: "Literature" },
    { label: "Poetry" },
    { label: "Lo-fi" },
    { label: "Classical music" },
    { label: "Jazz" },
    { label: "Hip hop" },
    { label: "EDM" },
    { label: "Acoustic guitar" },
    { label: "Piano" },
    { label: "Cover songs" },
    { label: "Live performances" },
    { label: "ASMR" },
    { label: "Pets" },
    { label: "Dogs" },
    { label: "Cats" },
    { label: "Wildlife" },
    { label: "Nature" },
    { label: "Interviews" },
    { label: "Talk shows" },
    { label: "Recent uploads" },
    { label: "Watched" },
    { label: "New to you" }
];


const videoData = [
    {
        thumbnailImgUrl: "https://wallpapercave.com/wp/wp8937457.jpg",
        label: "largest car",
        videoDuration: "14:40",
        channelLogo: "https://blog.logomyway.com/wp-content/uploads/2021/12/MrBeast-youtube-logo.jpg",
        channelName: "Pushkar Pant",
        views: "1.2M",
        postedAt: "2 weeks ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
        label: "Build a Full Stack E-commerce App with MERN",
        videoDuration: "4:20:15",
        channelLogo: "https://ui-avatars.com/api/?name=Web+Dev&background=random",
        channelName: "Web Mastery",
        views: "450K",
        postedAt: "1 month ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        label: "100 Days of LeetCode: Top DSA Patterns Explained",
        videoDuration: "22:10",
        channelLogo: "https://ui-avatars.com/api/?name=Code+Ninja&background=random",
        channelName: "Algo Camp",
        views: "89K",
        postedAt: "3 days ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
        label: "Digital Logic: Half Adders & Logic Breadboard Simulator",
        videoDuration: "18:45",
        channelLogo: "https://ui-avatars.com/api/?name=Hardware+Hub&background=random",
        channelName: "Tech Engineering",
        views: "12K",
        postedAt: "5 hours ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        label: "AWS Jam Event: Cloud Computing Basics & Takeaways",
        videoDuration: "35:00",
        channelLogo: "https://ui-avatars.com/api/?name=Cloud+Pro&background=random",
        channelName: "Cloud Architect",
        views: "210K",
        postedAt: "2 months ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
        label: "Mastering OOP in C++: Virtual Functions & Friend Functions",
        videoDuration: "28:30",
        channelLogo: "https://ui-avatars.com/api/?name=C+Plus&background=random",
        channelName: "Code Academy",
        views: "55K",
        postedAt: "1 week ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
        label: "Smart India Hackathon Winning Strategies",
        videoDuration: "12:15",
        channelLogo: "https://ui-avatars.com/api/?name=Hack+Team&background=random",
        channelName: "Dev Innovators",
        views: "1.1M",
        postedAt: "1 year ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        label: "Node.js & MongoDB Authentication using JWT & Bcrypt",
        videoDuration: "45:20",
        channelLogo: "https://ui-avatars.com/api/?name=Node+JS&background=random",
        channelName: "Backend Builder",
        views: "320K",
        postedAt: "4 months ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
        label: "Discrete Math: Hasse Diagrams and Posets Crash Course",
        videoDuration: "50:00",
        channelLogo: "https://ui-avatars.com/api/?name=Math+Genius&background=random",
        channelName: "University Plus",
        views: "18K",
        postedAt: "6 months ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
        label: "Building a Smart Tourist Safety System with AI & Blockchain",
        videoDuration: "1:15:00",
        channelLogo: "https://ui-avatars.com/api/?name=Future+Tech&background=random",
        channelName: "Web3 World",
        views: "42K",
        postedAt: "3 weeks ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        label: "JavaScript DOM Manipulation for Beginners",
        videoDuration: "25:10",
        channelLogo: "https://ui-avatars.com/api/?name=JS+Pro&background=random",
        channelName: "Frontend Daily",
        views: "600K",
        postedAt: "8 months ago"
    },
    {
        thumbnailImgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        label: "React Tailwind CSS Grid Masterclass",
        videoDuration: "30:45",
        channelLogo: "https://ui-avatars.com/api/?name=React+Dev&background=random",
        channelName: "UI Wizards",
        views: "150K",
        postedAt: "2 days ago"
    }
];


    return <>
        {/* Main Background */}
        <div className="bg-black min-h-screen overflow-hidden">
            
            {/* === NAVBAR === */}
            <nav className="px-4 h-14 w-full flex items-center justify-between text-white">
                
                {/* Left: Menu & Logo */}
                <div className="flex items-center flex-shrink-0">
                    <IoMenu 
                        className="text-2xl sm:mx-2 mx-1 mt-2 flex-shrink-0 cursor-pointer" 
                        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                    />
                    <img className="h-5 sm:px-4.5 px-2 mt-2 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="YoutubeLogo" />
                </div>

                {/* Middle: Search */}
                <div className="flex sm:flex-1 max-w-2xl items-center sm:gap-4 sm:mx-4 mx-1 gap-1 min-w-0 justify-end sm:justify-center">
                    <div className="hidden sm:flex w-full items-center border border-gray-700 rounded-full overflow-hidden bg-[#121212]">
                        <input type="text" placeholder="search" className="flex-1 bg-transparent px-4 py-2 outline-none min-w-0"/>
                        <button className="bg-[#222222] sm:px-5 sm:py-2.5 sm:border-l border-gray-700 hover:bg-gray-700 p-2">
                            <IoSearch className="text-xl"/>
                        </button>
                    </div>
                    {/* Mobile Search Icon */}
                    <button className="sm:hidden p-2 hover:bg-gray-800 rounded-full">
                         <IoSearch className="text-xl"/>
                    </button>
                    <button className="bg-[#181818] p-2.5 rounded-full hover:bg-gray-700 flex-shrink-0 hidden sm:block">
                        <MdOutlineKeyboardVoice className="text-xl" />
                    </button>
                </div>

                {/* Right: Profile */}
                <div className="flex items-center sm:gap-4 gap-2 flex-shrink-0 ml-2">
                    <div className="flex items-center rounded-full bg-[#222222] sm:px-3 p-2 gap-1.5 hover:bg-gray-700 cursor-pointer">
                        <FaPlus className="text-xl"/>
                        <span className="hidden sm:block font-medium">Create</span>
                    </div>
                    <GoBell className="text-xl cursor-pointer hover:text-gray-300" />
                    <div className="flex items-center justify-center w-8 h-8 bg-[#D12300] rounded-full cursor-pointer flex-shrink-0">P</div>
                </div>
            </nav>

           
            <div className="flex text-white h-[calc(100vh-56px)]">
                
               
                {isSideBarOpen ? (
                
                
                <div className="flex flex-col w-60 overflow-y-auto pb-4 custom-scrollbar">
                    
                    
                    <div className="p-3 flex flex-col gap-1">
                        {mainLinks.map((link, index) => {
                            return (<SidebarItem 
                                key={index}
                                Icon={link.icon}
                                label={link.label}
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
                    <button className="flex flex-col items-center justify-center w-full py-4 hover:bg-[#272727] rounded-lg gap-1">
                        <AiFillHome className="text-2xl" /> <span className="text-[10px]">Home</span>
                    </button>
                    <button className="flex flex-col items-center justify-center w-full py-4 hover:bg-[#272727] rounded-lg gap-1">
                        <SiYoutubeshorts className="text-2xl"/> <span className="text-[10px]">Shorts</span>
                    </button>
                    <button className="flex flex-col items-center justify-center w-full py-4 hover:bg-[#272727] rounded-lg gap-1">
                        <MdOutlineSubscriptions className="text-2xl"/> <span className="text-[10px]">Subscriptions</span>
                    </button>
                    <button className="flex flex-col items-center justify-center w-full py-4 hover:bg-[#272727] rounded-lg gap-1">
                        <LuHistory className="text-2xl"/> <span className="text-[10px]">You</span>
                    </button>
                </div>
                )}
                
                <div className="flex-1 overflow-x-hidden pt-3 px-4">
                    
                    <div className="h-14 flex items-center overflow-x-auto">
                        {categories.map((categorie, index) => {
                            return <FilterNav
                            key={index}
                            label={categorie.label} 
                            isActiveLabel={isActiveLabel === categorie.label}
                            onClick={() => setIsActiveLabel(categorie.label)}
                            />
                        })}       
                    </div>

                        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3.5">
                            {videoData.map((data, index) => {
                                 return <VideoCard 
                                    thumnailImgUrl={data.thumbnailImgUrl} 
                                    label={data.label} 
                                    videoDuration={data.videoDuration} 
                                    channelLogo={data.channelLogo} 
                                    channelName={data.channelName}
                                    views={data.views}
                                    postedAt={data.postedAt}
                                />
                            })}
                           
                            
                        </div>
                    
                </div>
                
            </div>
        </div>
    </>
}
export default YoutubeLayout;