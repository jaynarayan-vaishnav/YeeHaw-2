import Navbar from "../Components/Navbar";
import Towns from "../Components/Towns";
import cities from "../../content/cities.json";
function Town() {
  return (
    <main>
      <div className="bg-main bg-fixed  min-h-screen bg-no-repeat bg-cover">
        <Navbar />
        <div>
          <section className=" flex w-[85vw] mx-auto justify">
            <div className=" overflow-y-scroll h-[60vh] mt-40 w-full">
              <div className=' flex flex-col gap-10'>
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