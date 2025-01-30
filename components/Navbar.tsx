import Link from "next/link";

interface NavLink {
  id: number;
  title: string;
  path: string;
}

const navLinks: NavLink[] = [
  { id: 1, title: "Services", path: "/services" },
  { id: 2, title: "Portfolio", path: "/portfolio" },
  { id: 3, title: "Pricing", path: "/pricing" },
  { id: 4, title: "About Us", path: "/about" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center w-[34.6%]">
      <ul className="flex justify-center items-center">
        {navLinks.map((item) => (
          <li
            key={item.id}
            className=" text-center p-[0.3rem] relative mx-2"
          >
            <Link prefetch={false} href={item.path}>
              {item.title}
            </Link>
            {/* Hover effect on the bottom border */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
