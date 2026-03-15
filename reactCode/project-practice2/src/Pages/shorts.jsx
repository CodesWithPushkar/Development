import ShortsCard from "../components/shortsCard";
const ShortsPage = () => {
    return <>
        <div className="h-full overflow-y-scroll snap-y snap-mandatory flex flex-col gap-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
            <ShortsCard />
            <ShortsCard />
            <ShortsCard />
            <ShortsCard />
        </div>
        
    </>
}

export default ShortsPage;