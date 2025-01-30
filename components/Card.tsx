import Image from "next/image";

interface CardProps {
  icon: string;
  imageAlt: string;
  title: string;
  desc: string;
  button: string;
}
export const Card = ({ icon, imageAlt, title, desc, button }: CardProps) => {
  return (
    <div className="shadow-lg border border-secondary-lightGray px-6 py-4 rounded-xl">
      <div className="w-full h-auto relative mb-5">
        <Image
          src={icon}
          alt={imageAlt}
          width={40}
          height={40}
          className="object-cover mb-2"
        />
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>

      <button className="w-full bg-primary-light rounded-lg  text-secondary border border-secondary px-4 py-2">
        {button}
      </button>
    </div>
  );
};
