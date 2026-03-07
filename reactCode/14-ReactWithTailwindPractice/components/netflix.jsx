export default function NetflixStyleLayout() {
  return (
    // The main wrapper has NO height restrictions. Just a background color.
    <div className="bg-[#f3f7fa] font-sans text-slate-800">
      
      {/* 1. TOP NAVBAR (White) */}
      <nav className="bg-white border-b border-gray-200">
        {/* The Constrained Container keeping things centered */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-700 tracking-tighter">ALLEN</div>
          <div className="hidden md:flex gap-6 font-semibold text-sm">
            <a href="#" className="hover:text-blue-600">Classroom Courses</a>
            <a href="#" className="hover:text-blue-600">Online Courses</a>
            <a href="#" className="hover:text-blue-600">Test Series</a>
          </div>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Login
          </button>
        </div>
      </nav>

      {/* 2. PROMO BANNER (Green) */}
      <div className="bg-[#00a651] text-white text-center py-2 text-sm font-bold">
        🎉 SPECIAL OFFER! Appear for ASAT at ₹99 and get up to 90% scholarship* {'>'}
      </div>

      {/* 3. HERO SECTION (Light Blue) */}
      {/* py-20 gives it that massive height without hard-coding pixels */}
      <div className="bg-[#e4efff] py-20 border-b border-blue-100">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Text Area */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1e293b]">
              ALLEN Classroom Program
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              All India presence, 285+ classroom campuses
            </p>
            
            {/* Search Input */}
            <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-sm border border-gray-200">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input 
                type="text" 
                placeholder="Search by city name" 
                className="w-full outline-none text-slate-700 bg-transparent"
              />
            </div>
          </div>

          {/* Right Image/Illustration Area */}
          <div className="hidden md:block w-96 h-64 bg-blue-200 rounded-lg border-4 border-white shadow-lg flex items-center justify-center text-blue-400 font-bold">
            [Illustration Goes Here]
          </div>

        </div>
      </div>

      {/* 4. MAIN CONTENT SECTION (White/Gray with Cards) */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-16">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">All centers: 78</h2>
          <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold bg-white shadow-sm">
            State: All v
          </button>
        </div>

        {/* The Image Grid */}
        {/* Uses CSS Grid to automatically place cards side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Example Card 1 */}
          <div className="bg-gray-200 h-64 rounded-2xl shadow-sm overflow-hidden flex items-end p-4">
             <span className="text-white font-bold drop-shadow-md z-10">Taj Mahal</span>
          </div>
          {/* Example Card 2 */}
          <div className="bg-gray-300 h-64 rounded-2xl shadow-sm overflow-hidden flex items-end p-4">
            <span className="text-white font-bold drop-shadow-md z-10">River Bridge</span>
          </div>
           {/* Example Card 3 */}
           <div className="bg-gray-400 h-64 rounded-2xl shadow-sm overflow-hidden flex items-end p-4">
            <span className="text-white font-bold drop-shadow-md z-10">Clock Tower</span>
          </div>
           {/* Example Card 4 */}
           <div className="bg-gray-500 h-64 rounded-2xl shadow-sm overflow-hidden flex items-end p-4">
            <span className="text-white font-bold drop-shadow-md z-10">Golden Temple</span>
          </div>

        </div>
      </div>

    </div>
  );
}