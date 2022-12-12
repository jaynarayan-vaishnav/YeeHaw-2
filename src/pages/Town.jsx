import Navbar from "../Components/Navbar";
import Towns from "../Components/Towns";
import cities from "../../content/cities.json";
import Search from "../Components/Search";
function Town() {
  return (
    <main>
      <div className="bg-main bg-fixed  min-h-screen bg-no-repeat bg-cover">
        <Navbar />
        <div>
          <section className=" w-[85vw] mx-auto justify">
            <Search />
            <div className=" overflow-y-scroll h-[56vh] mt-36 w-full">
              <div className=' font-cormorant text-lg flex flex-col gap-10'>
                {cities.map((item, key) => <Towns key={key} item={item} />)}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Town;