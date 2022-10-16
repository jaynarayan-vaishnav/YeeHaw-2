import Navbar from "../Components/Navbar";
import Product from "../Components/Product";

export default function Shop() {
  return (
    <main className="bg-main w-full min-h-screen bg-cover bg-no-repeat ">
      <Navbar />
      <section className="w-[85vw] mt-[-30px] mx-auto min-h-[90vh] flex items-center justify-center gap-10 ">
        <Product source={"/belt.png"} productName={"A pure leather belt made in india"} price={"$150"}/>
        <Product source={"/rope.png"} productName={"Long rope specially made in india"} price={"$50"}/>
        <Product source={"/hat-cowboy.png"} productName={"Brown hat with great quality"} price={"$80"}/>
        <Product source={"/boots.png"}  productName={"Boots specially made for cowboy"} price={"$250"}/>
      </section>
    </main>
  );
}
