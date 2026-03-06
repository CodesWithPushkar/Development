import Otp from "../components/otp";
const App = () => {
  return <>
    <div className="relative h-dvh flex justify-center items-center bg-customblue">
      <div className="absolute top-12 font-bold text-3xl text-white mb-30">Practice.gg</div>
      <div className="absolute top-40 font-bold text-2xl text-white">Verify Your Age</div>
      <div className="flex flex-col items-center">
        <div className="text-white">Please confirm your birth year. This data will not be stored</div>
        <input type="text" placeholder="your birth year" className="w-88 h-10 mt-5 p-5 bg-gray-300 rounded-lg"/>
        <div>
          <button className="w-88 h-10 bg-gray-300 rounded-lg text-white font-semibold m-10">Continue</button>
        </div>
        <Otp />
      </div>    
    </div>
  </>
}

export default App;