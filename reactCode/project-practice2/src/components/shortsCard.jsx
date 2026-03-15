import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { RiShareForwardLine } from "react-icons/ri";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaRegClosedCaptioning } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgArrowsExpandLeft } from "react-icons/cg";

import ShortsBar from "./shortsBar";


const actions = [
    {Icon: BiLike, label: "Like"},
    {Icon: BiDislike, label: "Dislike"},
    {Icon: TbMessage, label: "Comments"},
    {Icon: RiShareForwardLine , label: "Share"},
    {Icon: BsBookmarkPlus, label: "Remix"}
];

const ShortsCard = () => {
    return <>
        <div className="m-auto h-[96%] snap-center shrink-0 snap-always">
            <div className="flex justify-center h-full">
                <div className="aspect-[9/16] rounded-2xl overflow-hidden h-full relative">

                    <div className="flex justify-between items-center absolute w-full top-0 p-4 z-20">
                        <div className="flex gap-2 text-white">
                            <div className="flex justify-center items-center bg-black/40 w-12 h-12 rounded-full p-1 cursor-pointer">
                                <div className="flex justify-center items-center h-full w-full hover:bg-black/20 rounded-full transition-colors duration-200">
                                    <FaPlay className="ml-0.5 text-lg"/>
                                </div>
                            </div>
                             <div className="group flex justify-start items-center bg-black/40 w-12 hover:w-43 h-12 rounded-full px-3 transtion-all duration-300 ease-in-out cursor-pointer">
                                <HiSpeakerWave className="text-2xl min-w-[24px]"/>
                                <input type="range"
                                    min="0"
                                    max="100"
                                    defaultValue="100"
                                    className="ml-2 w-0 opacity-0 group-hover:w-26 group-hover:opacity-100 transition-all duration-300 accent-white cursor-pointer "
                                />
                            </div>
                           
                        </div>
                        <div className="flex justify-between bg-black/40 rounded-full p-1 cursor-pointer">
                            <div className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-black/20 transition-colors duration-200">
                                <FaRegClosedCaptioning className="text-2xl"/>
                            </div>
                            <div className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-black/20 transition-colors duration-200">
                                <BsThreeDotsVertical className="text-2xl"/>
                            </div>
                            <div className="flex justify-center items-center w-12 h-12 rounded-full hover:bg-black/20 transition-colors duration-200">
                                <CgArrowsExpandLeft className="text-2xl"/>
                            </div>
                        </div>
                        
                    </div>
                    <img src="https://i.etsystatic.com/7919988/r/il/fbdd69/5479785412/il_570xN.5479785412_rma3.jpg" alt="video" className="h-full w-full object-cover"/>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10"></div>

                    <div className="absolute z-20 flex flex-col bottom-0 left-0 p-4">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full flex overflow-hidden">
                                <img src="https://m.media-amazon.com/images/I/811EFVLrPDL.jpg" alt="channel-logo" className="h-full w-full object-cover"/>
                            </div>
                            <p className="text-white drop-shadow-md text-sm">@CodesWithPushkar</p>
                            <button className="bg-white text-black rounded-full px-3 py-1.5 text-xs font-medium">Subscribe</button>
                        </div>

                        <div>
                            my name is pushkar
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 justify-end items-center px-3">

                    {actions.map((action, index) => {
                        return <ShortsBar 
                        key={index}
                        Icon={action.Icon}
                        label={action.label} 
                        />
                    })}
                    
                    <div className="h-10 w-10 p-1 rounded-4xl overflow-hidden">
                        <img src="https://m.media-amazon.com/images/I/811EFVLrPDL.jpg" alt="audio"/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ShortsCard;