import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useRef, useState } from "react";
import Image from "next/image";

type ScrollableContentProps = {
  buttonList: {
    id: number;
    title: string;
    content: string;
  }[]; // List of buttons
  contentImages: string[]; // List of images
  contentHeading: string; // Heading of the section
  showLoadMoreButton?: boolean; // Optional prop to control if the Load More button is shown
  onLoadMore?: () => void; // Optional prop to handle "Load More" button click
};

const ScrollableContent: React.FC<ScrollableContentProps> = ({
  contentHeading,
  buttonList,
  contentImages,
  showLoadMoreButton = false,
  onLoadMore,
}) => {
  const [activeButtonId, setActiveButtonId] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Ref to store button elements
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNext = () => {
    const nextId =
      activeButtonId === buttonList.length - 1 ? 0 : activeButtonId + 1;
    setActiveButtonId(nextId);
    if (buttonRefs.current[nextId]) {
      buttonRefs.current[nextId]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handlePrevious = () => {
    const prevId =
      activeButtonId === 0 ? buttonList.length - 1 : activeButtonId - 1;
    setActiveButtonId(prevId);
    if (buttonRefs.current[prevId]) {
      buttonRefs.current[prevId]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full container mx-auto my-16">
      <h2 className="text-secondary font-semibold text-2xl mt-6 mb-3">
        {contentHeading}
      </h2>

      <div className="scroll-container">
        <div
          ref={scrollRef}
          className="scrollmenu flex flex-row gap-4 mb-4 whitespace-nowrap overflow-hidden scroll-smooth snap-x scrollbar-none w-full"
        >
          {buttonList.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                // Store reference of each button in buttonRefs.current
                buttonRefs.current[index] = el;
              }}
              onClick={() => setActiveButtonId(item.id)}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                activeButtonId === item.id
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 items-center justify-end">
        <FaArrowCircleLeft
          size={25}
          className="text-secondary cursor-pointer mt-2 hover:scale-105 transition-transform"
          onClick={() => {
            handleScroll("left");
            handlePrevious();
          }}
        />
        <FaArrowCircleRight
          size={25}
          className="text-secondary cursor-pointer mt-2 hover:scale-105 transition-transform"
          onClick={() => {
            handleScroll("right");
            handleNext();
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {contentImages.map((image, index) => (
          <div
            key={index}
            className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={image}
              width={900}
              height={900}
              alt={`Content ${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      {showLoadMoreButton && (
        <div className="flex justify-center mt-6">
          <button
            onClick={onLoadMore}
            className="w-[20rem] mx-auto bg-primary text-primary-light px-4 py-2 my-16 rounded-lg whitespace-nowrap"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollableContent;
