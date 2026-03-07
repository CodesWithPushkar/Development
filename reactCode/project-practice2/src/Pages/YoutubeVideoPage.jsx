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





const YoutubeLayout = () => {
    return <>
        <div className="bg-black min-h-screen">
            <nav className="px-4 h-14 w-full flex items-center justify-between text-white">
                <div className="flex items-center flex-shrink-0">
                    <IoMenu className="text-2xl sm:mx-2 mx-1 mt-2 flex-shrink-0" />
                    <img className="h-5 sm:px-4.5 px-2 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="YoutubeLogo" />
                </div>



                <div className="flex sm:flex-1 max-w-2xl items-center sm:gap-4 sm:mx-4 mx-1 gap-1 min-w-0">
                        <div className=" sm:w-full items-center border border-gray-700 rounded-full overflow-hidden bg-[#121212] flex">
                            <input type="text" placeholder="search" className="flex-1 bg-transparent px-4 py-2 outline-none hidden sm:flex min-w-0"/>
                        
                            <button className="bg-[#222222] sm:px-5 sm:py-2.5 sm:border-l border-gray-700 hover:bg-gray-700 p-2">
                                <IoSearch className="text-xl"/>
                            </button>
                        </div>
                        <button className="bg-[#181818] p-2.5 rounded-full hover:bg-gray-700 flex-shrink-0">
                            <MdOutlineKeyboardVoice className="text-xl" />
                        </button>
                </div>





                <div className="flex items-center sm:gap-4 gap-1  flex-shrink-0">
                    <div className="flex items-center rounded-4xl bg-[#222222] p-2 gap-1.5">
                        <FaPlus className="text-xl"/>
                        Create
                    </div>
                    <GoBell  className="text-xl" />
                    <div className="flex items-center justify-center w-8 h-8 bg-[#D12300] rounded-full">P</div>
                </div>
            </nav>




            <div className="flex text-white gap-6">
                <div className="flex flex-col">
                    <div className="w-60 h-36.25 p-3 flex flex-col">
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <AiFillHome className="text-2xl" />
                            Home
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <SiYoutubeshorts className="text-2xl"/>
                            Shorts
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <MdOutlineSubscriptions className="text-2xl"/>
                            Subscriptions
                        </button>
                    </div>

                    <hr className="bg-gray-500"/>

                    <div className="p-3 w-60 h-86.25 flex flex-col">
                        <button className="px-3 flex items-center flex-1 gap-4">
                            You
                            <MdKeyboardArrowRight className="text-2xl"/>
                            </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <LuHistory className="text-2xl"/>
                            History
                            </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <CgPlayList className="text-2xl"/>
                            Playlists
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                             <MdOutlineWatchLater className="text-2xl"/>
                            Watch later
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <BiLike className="text-2xl"/>
                            Liked videos
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <TfiDownload className="text-2xl"/>
                            Downloads
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <MdKeyboardArrowDown className="text-2xl"/>
                            Show More
                        </button>
                    </div>

                    <hr className="bg-gray-500"/>

                    <div className="p-3 w-60 h-54.25 flex flex-col">
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <LuShoppingBag className="text-2xl"/>
                            Shopping
                            </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <CgMusicNote className="text-2xl"/>
                            Music
                            </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <MdMovie className="text-2xl"/>
                            Movies
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <MdKeyboardArrowDown className="text-2xl"/>
                            Show More
                        </button>
                    </div>

                    <hr className="bg-gray-500"/>

                    <div className="p-3 w-60 h-54.25 flex flex-col">
                        <div className="px-3 flex items-center gap-4 h-8">
                            More from YouTube
                        </div>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <CgMusicNote className="text-2xl"/>
                            Music
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <MdMovie className="text-2xl"/>
                            Movies
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <MdKeyboardArrowDown className="text-2xl"/>
                            Show More
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <MdKeyboardArrowDown className="text-2xl"/>
                            Show More
                        </button>
                    </div>

                    <hr className="bg-gray-500"/>

                    <div className="p-3 w-60 h-46 flex flex-col">
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <LuSettings className="text-2xl"/>
                            Settings
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <IoFlagOutline className="text-2xl"/>
                            Report History
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                           <MdOutlineHelpOutline className="text-2xl"/>
                            Help
                        </button>
                        <button className="px-3 flex items-center flex-1 gap-4">
                            <MdOutlineFeedback className="text-2xl"/>
                            Send Feeback
                        </button>
                    </div>

                </div>
                <div className="h-14 flex items-center">
                    <div className="w-10.25 h-8 flex items-center justify-center bg-white text-black rounded-lg">All</div>
                </div>
            </div>
        </div>
        
    </>
}
export default YoutubeLayout;