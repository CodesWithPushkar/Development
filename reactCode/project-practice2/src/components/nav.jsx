import { useState } from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
const NavBar = ({setIsSideBarOpen}) => {
    const [countNotification, setCountNotification] = useState(105);
    return <>
        <nav className="px-4 h-14 w-full flex items-center justify-between text-white">    
                {/* Left: Menu & Logo */}
                <div className="flex items-center flex-shrink-0">
                    <IoMenu 
                        className="text-2xl sm:mx-2 mx-1 mt-2 flex-shrink-0 cursor-pointer" 
                        onClick={() => setIsSideBarOpen(is => !is)}
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
                    
                    <button className="bg-[#181818] p-2.5 rounded-full hover:bg-gray-700 flex-shrink-0 hidden sm:block">
                        <MdOutlineKeyboardVoice className="text-xl" />
                    </button>
                </div>

                {/* Right: Profile */}
                <div className="flex items-center sm:gap-4 gap-2 flex-shrink-0 ml-2">
                    {/* Mobile Search Icon */}
                    <button className="sm:hidden p-2 hover:bg-gray-800 rounded-full">
                         <IoSearch className="text-xl"/>
                    </button>

                    <div className="flex items-center rounded-full bg-[#222222] sm:px-3 p-2 gap-1.5 hover:bg-gray-700 cursor-pointer">
                        <FaPlus className="text-xl"/>
                        <span className="hidden sm:block font-medium">Create</span>
                    </div>
                     
                    <div className="relative">
                        <GoBell className="text-xl cursor-pointer hover:text-gray-300" onClick={() => setCountNotification(0)}/>
                        {countNotification !== 0 &&
                        <div className="bg-[#FF0000] absolute top-0 right-0 text-[10px] font-bold translate-x-1/2 -translate-y-1/3 flex items-center justify-center rounded-full h-[16px] min-w-[16px] px-1">{countNotification > 99 ? '99+' : countNotification}</div>}
                    </div>
                    
                    
                    
                    <div className="flex items-center justify-center w-8 h-8 bg-[#D12300] rounded-full cursor-pointer flex-shrink-0">P</div>
                </div>
        </nav>
    </>
}

export default NavBar;