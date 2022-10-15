import Navbar from "../Components/Navbar";
import criminal from "../assets/criminal.png";
import wanted from "../assets/wanted.png";

function bounty() {
  return (
    <div className="bg-main bg-fixed  min-h-screen bg-no-repeat bg-cover">
      <Navbar />
      <div className=" flex w-[85vw] mx-auto justify">
        <div className=" grid grid-cols-3 mt-8 gap-6  gap-x-12">
          <img className ="w-[14vw]"src={wanted} alt="" />
          <img className ="w-[14vw]" src={wanted} alt="" />
          <img className ="w-[14vw]" src={wanted} alt="" />
          <img className ="w-[14vw]" src={wanted} alt="" />
          <img className ="w-[14vw]" src={wanted} alt="" />
          <img className ="w-[14vw]" src={wanted} alt="" />
        </div>
        <div>
          <img className="  absolute w-[30vw] translate-x-[14vw] translate-y-16" src={criminal} alt="" />
        </div>
      </div>
    </div>
  )
}

export default bounty