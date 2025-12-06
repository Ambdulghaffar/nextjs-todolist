import Banner from "@/components/home/banner";
import HomeNavbar from "@/components/home/home-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-10 pt-4">
    <HomeNavbar/>
    <Banner/>
    </div>
  );
}
