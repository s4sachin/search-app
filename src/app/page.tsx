import React from "react";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";
import HomeSearch from "./components/HomeSearch";

const page = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-48 w-max:{584px}">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google Logo"
          width={300}
          height={100}
          priority
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default page;
