import Navbar from "../Components/Navbar";
import homepage from "../assets/homepage.png"

function App() {
  return (
    <div className="bg-main min-h-screen bg-no-repeat bg-cover">
      <Navbar />
      <section className=" flex w-100 h-90 mr-32 ml-32">
        <img className=" w-[37vw]" src= {homepage} alt="" />
        <div className="font-rancho text-white mt-[16vw] text-center">
          <p className="text-7xl pb-20"> “A cowboy is a man with guts and a horse.”</p>
          <button className="  text-2xl bg-red-500 rounded-lg py-2 px-4  tracking-widest hover:bg-black"> <a href ="/#/bounty">Hunt Bounty </a></button>
        </div>
      </section>
    </div>
  )
}

export default App
