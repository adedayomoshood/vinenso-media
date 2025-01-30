import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="h-[10vh] w-[96%] flex justify-between mx-auto"> 
        <Image src={'/Vineso_Logo.png'} width={80} height={80} alt="vineso media logo" className="my-auto" />
      <Navbar />
    </header>
  );
}
