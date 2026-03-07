const AgeForm = () => {



    return (
    // We removed the grid layout! 
    // We keep min-h-screen ONLY so the dark blue background covers the whole page, 
    // but it no longer controls the position of the items inside.
    <div className="min-h-screen bg-[#062c4d] font-sans text-white">
      
      {/* 1. The Logo: Hard-coded to be exactly 100px from the top */}
      <div className="flex justify-center pt-[100px] pb-[60px]">
        <div className="flex items-center gap-2 text-2xl font-semibold tracking-wide text-cyan-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Webinar.gg
        </div>
      </div>

      {/* 2. The Form: Stacks directly under the logo, no matter what */}
      <div className="flex flex-col items-center w-full max-w-md mx-auto px-6 pb-32">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Verify Your Age
        </h1>
        <p className="text-[#8ea5bc] text-sm md:text-base mb-8 text-center">
          Please confirm your birth year. This data will not be stored.
        </p>
        
        <form className="w-full flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Your Birth Year" 
            className="w-full bg-[#123e63] text-white placeholder-[#5d85a6] border border-transparent focus:border-cyan-400 rounded-lg px-4 py-3.5 outline-none transition-all"
          />
          <button 
            type="submit" 
            className="w-full bg-[#8ca8bf] hover:bg-[#9ebbd3] text-white font-semibold rounded-lg px-4 py-3.5 transition-colors"
          >
            Continue
          </button>
        </form>
      </div>

    </div>
  );



//   return (
//     // The Grid Trick: 1fr (top), auto (middle form), 1fr (bottom)
//     <div className="min-h-screen bg-[#062c4d] font-sans text-white grid grid-rows-[1fr_auto_1fr] gap-8 p-6">
      
//       {/* 1. Top Row: Automatically sits at ~25% height */}
//       <div className="flex items-center justify-center min-h-[80px]">
//         {/* Logo Container */}
//         <div className="flex items-center gap-2 text-2xl font-semibold tracking-wide text-cyan-400">
//           <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             {/* Dummy monitor icon to match */}
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//           Webinar.gg
//         </div>
//       </div>

//       {/* 2. Middle Row: The Form, staying dead-center */}
//       <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
//         <h1 className="text-2xl md:text-3xl font-bold mb-4">
//           Verify Your Age
//         </h1>
//         <p className="text-[#8ea5bc] text-sm md:text-base mb-8 text-center">
//           Please confirm your birth year. This data will not be stored.
//         </p>
        
//         <form className="w-full flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
//           <input 
//             type="text" 
//             placeholder="Your Birth Year" 
//             className="w-full bg-[#123e63] text-white placeholder-[#5d85a6] border border-transparent focus:border-cyan-400 rounded-lg px-4 py-3.5 outline-none transition-all duration-200"
//           />
//           <button 
//             type="submit" 
//             className="w-full bg-[#8ca8bf] hover:bg-[#9ebbd3] text-white font-semibold rounded-lg px-4 py-3.5 transition-colors duration-200"
//           >
//             Continue
//           </button>
//         </form>
//       </div>

//       {/* 3. Bottom Row: Empty, balances the '1fr' from the top to keep the form centered */}
//       <div></div>
      
//     </div>
//   );
};

export default AgeForm;


