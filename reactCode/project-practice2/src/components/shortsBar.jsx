
const ShortsBar = ({Icon, label}) => {
    return <>
        <div className="flex flex-col items-center">
            <div className="bg-[#222222] p-3.5 rounded-full">
                <Icon className="text-2xl"/>
            </div>
            <p className="text-xs">{label}</p>
        </div>
       
    </>
}

export default ShortsBar;