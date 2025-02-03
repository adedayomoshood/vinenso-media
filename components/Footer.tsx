import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Explore = [
  { id: 1, title: "Home", path: "/programmes#7" },
  { id: 2, title: "About Us", path: "/programmes#1" },
  { id: 3, title: "Pricing", path: "/programmes#2" },
  { id: 4, title: "Services", path: "/programmes#3" },
  { id: 5, title: "Portfolio", path: "/programmes#4" },
  { id: 6, title: "Blog", path: "/programmes#5" },
];

const Services = [
  {
    id: 1,
    title: "Social Media Management",
    path: "https://x.com/Join_Teleios",
  },
  {
    id: 2,
    title: "SEO Content Writing",
    path: "https://www.facebook.com/profile.php?id=61565620719682",
  },
  {
    id: 3,
    title: "Image Post Design",
    path: "https://www.instagram.com/jointeleios",
  },
  {
    id: 4,
    title: "Short-Form Video",
    path: "https://www.linkedin.com/in/join-teleios-74580732a",
  },
  {
    id: 5,
    title: "Custom Short Videos",
    path: "https://www.linkedin.com/in/join-teleios-74580732a",
  },
];

const Support = [
  { id: 1, title: "FAQ", path: "https://x.com/Join_Teleios" },
  {
    id: 2,
    title: "Contact Us",
    path: "https://www.facebook.com/profile.php?id=61565620719682",
  },
  {
    id: 3,
    title: "Privacy Policy",
    path: "https://www.instagram.com/jointeleios",
  },
  {
    id: 4,
    title: "Terms of Service",
    path: "https://www.linkedin.com/in/join-teleios-74580732a",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black px-6 sm:px-20 pb-20 pt-40 text-white relative">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Explore Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul>
            {Explore.map((link) => (
              <li key={link.id} className="mb-2">
                <Link href={link.path} aria-label={link.title} prefetch={false}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul>
            {Services.map((service) => (
              <li key={service.id} className="mb-2">
                <a
                  href={service.path}
                  aria-label={service.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul>
            {Support.map((item) => (
              <li key={item.id} className="mb-2">
                <a
                  href={item.path}
                  aria-label={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info Section */}
        <div>
          <Image
            src="/Vineso_Logo.png"
            width={50}
            height={50}
            alt="Vinenso Media Logo"
          />
          <p className="mt-4 text-sm">
            Vinenso Media helps businesses grow their online presence with
            tailored social media strategies, engaging content, and SEO
            solutions. From visuals to copy, we make sure your brand stands out.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4">
        {/* Legal Links */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <Link href="/terms">Terms</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/cookies">Cookies</Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://www.instagram.com/jointeleios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565620719682"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@jointeleios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
