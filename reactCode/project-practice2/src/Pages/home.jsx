import { Link } from "react-router-dom";
import VideoCard from "../components/videoCard";
import CategoryBar from "../components/categoryBar";
import YoutubeLayout from "../components/YoutubeLayout";

const Home = () => {

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
    },
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
];


    return <>
            <CategoryBar />
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3.5">
                    {videoData.map((data, index) => {
                        return <VideoCard 
                            key={index}
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
       
    </>
}
export default Home;