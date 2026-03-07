export default function AllenLayout() {
  return (
    <div className="bg-[#f3f7fa] min-h-screen">
      
      {/* Slice 1: Navbar */}
      <div className="bg-white border-b">
        {/* FLEX: Push Logo, Links, and Button apart */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>LOGO</div>
          <div className="flex gap-6">LINKS</div>
          <div>BUTTON</div>
        </div>
      </div>

      {/* Slice 2: Promo Banner */}
      <div className="bg-[#00a651] py-2 text-center text-white">
        Special Offer Text Here
      </div>

      {/* Slice 3: Hero Section */}
      <div className="bg-[#e4efff] py-30">
        {/* FLEX: Put Text on left, Image on right */}
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
           <div className="w-1/2">Hero Text & Search Bar</div>
           <div className="w-1/2 hidden md:block">Right Side Image</div>
        </div>
      </div>

      {/* Slice 4: Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Header - FLEX: Push Title and Dropdown apart */}
          <div className="flex justify-between items-center mb-8">
            <h2>All Centers: 78</h2>
            <button>State: All</button>
          </div>

          {/* Cards - GRID: Create a 4-column checkerboard */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gray-300 h-64 rounded-xl">Card 1</div>
            <div className="bg-gray-400 h-64 rounded-xl">Card 2</div>
            <div className="bg-gray-500 h-64 rounded-xl">Card 3</div>
            <div className="bg-gray-600 h-64 rounded-xl">Card 4</div>
            <div className="bg-gray-300 h-64 rounded-xl">Card 1</div>
            <div className="bg-gray-400 h-64 rounded-xl">Card 2</div>
            <div className="bg-gray-500 h-64 rounded-xl">Card 3</div>
            <div className="bg-gray-600 h-64 rounded-xl">Card 4</div>
          </div>

        </div>
      </div>

    </div>
  );
}