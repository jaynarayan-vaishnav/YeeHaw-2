function Navbar() {
  return (
    <nav className="bg-white bg-transparent">
      <div className="max-w-[85vw] mx-auto">
        <div className="flex items-center justify-between h-[10vh] gap-10">
          <div className="w-full justify-between flex items-center">
            <a
              className="flex flex-shrink-0 gap-1 hover:scale-105 duration-300"
              href="/"
            >
              <img
                className="h-6 w-6 saturate-200"
                src="/revolver.png"
                alt="site logo"
              />
              <p className="text-2xl font-rye text-white">HuntersNest</p>
            </a>
            <div className="ml-10 flex items-baseline gap-10 font-rancho text-xl tracking-widest">
              <a
                className="text-white hover:text-amber-500 px-3 py-2 rounded-md duration-300"
                href="/#/bounty"
              >
                Bounty
              </a>
              <a
                className="text-white hover:text-amber-500 px-3 py-2 rounded-md duration-300"
                href="/#/towns"
              >
                Towns
              </a>
              <a
                className="text-white hover:text-amber-300 px-3 py-2 rounded-md duration-300"
                href="/#/shop"
              >
                Shop
              </a>
            </div>
          </div>
          <button className="flex font-rancho text-md text-white font-normal bg-black/80 px-6 py-2 rounded-lg duration-300 tracking-widest">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
