function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 bg-transparent">
        <div className="max-w-[90vw] mx-auto">
            <div className="flex items-center justify-between h-[10vh] gap-20">
                <div className="w-full justify-between flex items-center">
                    <a className="flex flex-shrink-0 gap-1 hover:scale-105 duration-300" href="/">
                        <img className="h-8 w-8 saturate-200" src="/revolver.png" alt="site logo" />
                        <p className="text-3xl font-rye text-white">HuntersNest</p>
                    </a>
                    <div className="ml-10 flex items-baseline gap-20 font-rancho text-3xl tracking-wider">
                        <a className="text-white hover:text-amber-500 px-3 py-2 rounded-md duration-300" href="/#/bounty">
                            Bounty
                        </a>
                        <a className="text-white hover:text-amber-500 px-3 py-2 rounded-md duration-300" href="/#/towns">
                            Towns
                        </a>
                        <a className="text-white hover:text-amber-300 px-3 py-2 rounded-md duration-300" href="/#/shop">
                            Shop
                        </a>
                    </div>
                </div>
                <button className="flex font-cormorant text-2xl text-white font-bold bg-red-500 px-4 py-2 rounded-lg hover:bg-amber-500 duration-300">
                    LOGIN
                </button>
            </div>
        </div>
    </nav>
  )
}
export default Navbar
