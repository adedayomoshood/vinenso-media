import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="h-[10vh] w-[90%] flex justify-between mx-auto">
      <Image
        src={"/Vineso_Logo.png"}
        width={120}
        height={110}
        alt="vineso media logo"
        className="my-auto"
      />
      <Navbar />
    </header>
  );
}
