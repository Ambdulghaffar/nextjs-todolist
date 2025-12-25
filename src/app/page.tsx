import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import NavbarHome from "@/components/home/navbar-home";

export default function Home() {
  return (
    <>
      <div className="px-10 pt-4">
        <NavbarHome />
        <Banner />
      </div>
      <Footer/>
    </>
  );
}