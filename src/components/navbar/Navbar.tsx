import Image from "next/image";
import React from "react";

const Navbar = () => {
  const profileName = "Praise Omeire";

  return (
    <div className="bg-white border-b shadow-md p-4 md:p-6 lg:p-8">
      <div className="flex flex-wrap justify-between items-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          WhatBytes
        </h3>

        <div className="flex items-center border border-gray-300 shadow-md p-2 rounded-md gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/praise-hero.jpg"
              width={40}
              height={40}
              alt="profile pic"
              className="object-cover"
            />
          </div>
          <p className="font-semibold text-sm md:text-base">{profileName}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
