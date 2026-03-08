import { BsThreeDotsVertical } from "react-icons/bs";

const VideoCard = ({thumnailImgUrl, label, videoDuration, channelLogo, channelName, views, postedAt}) => {
    return (
    <div className="flex flex-col gap-2 cursor-pointer mb-8">
        <div className="w-full relative pb-3">
            <img 
            src={thumnailImgUrl} 
            alt="videoCard" 
            className="w-full aspect-video object-cover rounded-xl"
            />
            <div className="absolute bottom-1.5 right-1.5 bg-black text-xs text-white font-medium px-1.5 py-0.5 rounded">{videoDuration}</div>
        </div>

        <div className="flex gap-3">
            <div className="h-9 w-9 flex flex-shrink-0 items-center justify-center rounded-full overflow-hidden">
                <img src={channelLogo} alt="channel logo" className="object-cover rounded-full"/>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <h3 className="text-white font-medium text-base line-clamp-2 leading-tight">{label}</h3>
                    <p className="text-[#AAAAAA] text-sm mt-1 hover:text-white transition-colors">{channelName}</p>
                    <p className="text-[#AAAAAA] text-sm">
                        {views} views • {postedAt}
                    </p>
                </div>
                <BsThreeDotsVertical />
            </div>
            
        </div>
    </div>
    )
}
export default VideoCard;