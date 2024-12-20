"use client"

import { SyntheticEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const HomeSearch = () => {

  const [userInput, setUserInput] = useState<string>('');
  const [randomSearchLoading, setRandomSearchLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if(!userInput.trim()) return;
    router.push(`/search/web?searchTerm=${userInput}`)
  }

  const handleRandomSearch = async () => {
    setRandomSearchLoading(true);
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if(!data) return;
      router.push(`/search/web?searchTerm=${data[0]}`);
      setRandomSearchLoading(false);
    } catch (error) {
      console.error('Error fetching random words:', error);
      throw error;
    }
  };
  
  return (
    <>
      <form
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow
    sm:max-w-xl lg:max-w-2xl"
    onSubmit={handleFormSubmit}
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" onChange={e => setUserInput(e.target.value)}/>
        <BsFillMicFill className="text-xl" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button className="bg-[#f9f8fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none 
        active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
        onClick={handleFormSubmit}
        >
          Google Search
        </button>
        <button 
        className="bg-[#f9f8fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none
        active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
        onClick={handleRandomSearch}
        disabled={randomSearchLoading}
        >
          {randomSearchLoading ? 'Loading...' : `I'm Feeling Lucky`}
        </button>
      </div>
    </>
  );
};

export default HomeSearch; 
