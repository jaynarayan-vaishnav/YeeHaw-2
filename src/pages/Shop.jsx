import Navbar from "../Components/Navbar";
import Product from "../Components/Product";

export default function Shop() {
  return (
    <main className="bg-main w-full min-h-screen bg-cover bg-no-repeat ">
      <Navbar />
      <section className="w-[85vw] mt-[-30px] mx-auto min-h-[90vh] flex items-center justify-center gap-10 ">
        <Product pt="CowBoy Leather belt." source={"/belt.png"}/>
        <Product pt="CowBoy Lasso." source={"/rope.png"}/>
        <Product pt="CowBoy Hat." source={"/hat-cowboy.png"}/>
        <Product pt="CoyBoy Boots" source={"/boots.png"}/>
      </section>
    </main>
  );
}
