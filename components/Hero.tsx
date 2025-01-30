import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-hero-gradient w-full h-[85vh] flex items-center justify-between">
      <div className="grid grid-cols-2 mx-auto">
        <div className="px-6 max-w-screen-md py-10">
          <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 text-black">
            Professional{" "}
            <span className="text-primary-blue">Social Media Management</span>{" "}
            and Content Marketing Starting at{" "}
            <span className="text-primary">$50</span>
          </h1>
          <p className="w-[80%] text-base lg:text-lg mb-6 text-gray-700">
            Branded Image Posts, Short-Form Videos, SEO Content, and Copywriting
            to Grow Your Business Online
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary shadow-lg shadow-primary hover:shadow-red-500/70 text-white px-6 py-3 rounded-lg">
              Chat With Our CEO
            </button>
            <button className=" bg-primary-light text-secondary border border-secondary px-6 py-3 rounded-lg ">
              See Our Work Examples
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[32rem]">
          {" "}
          {/* First Image */}
          <div className="row-span-2 col-span-1">
            <Image
              src={"/realestate.png"}
              alt="Real Estate"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Second Image */}
          <div className="row-span-1 col-span-1">
            <Image
              src={"/skincare.png"}
              alt="Skincare"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Third Image */}
          <div className="row-span-1 col-span-1 ">
            <Image
              src={"/moisturizer.png"}
              alt="Moisturizer"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
