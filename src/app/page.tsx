import Navbar from "@/ui/partials/navbar";
import Carousel from "@/ui/components/slider";
import Categories from "@/ui/partials/categories";
import Footer from "@/ui/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Categories />
      <Footer />
    </>
  );
}
