"use client";

const StillHaveQuestions = () => {
  return (
    <div className="bg-[#F8F8F8] p-6 rounded-lg flex space-x-8 justify-between items-center w-full max-w-3xl mx-auto my-10">
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900">
          Still Have Questions?
        </h3>
        <p className="text-gray-700 mt-2">
          Not sure where to start or need more details? We’re here to help.
          Reach out with your questions, and we’ll get back to you with the
          answers you need.
        </p>
      </div>
      <button className="bg-[#E74C3C] text-white px-5 py-2 rounded-md font-medium hover:bg-red-600 transition duration-300 whitespace-nowrap uppercase min-w-[300px] shadow-lg shadow-red-400/50 hover:shadow-red-500/80">
        Contact Us
      </button>
    </div>
  );
};

export default StillHaveQuestions;
