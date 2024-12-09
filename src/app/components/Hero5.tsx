import React, { useState } from "react";
import Image from "next/image";

export const Hero5 = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-white relative">
      <div className="absolute top-5 text-center">
        <p className="text-sm font-semibold text-gray-500">Share Your Setup With</p>
        <h2 className="text-3xl font-bold mt-1">#FuniroFurniture</h2>
      </div>
      <div className="w-full flex justify-center items-center mt-20 p-4 gap-6">
        <div className="flex flex-col gap-4 w-[30%] sm:w-[25%]">
          <div className="flex gap-4">
            <div className="w-[48%] h-[300px] relative">
              <Image
                src="/blog1.jpg"
                alt="Left Image 1 (Portrait)"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-[48%] h-[150px] relative">
              <Image
                src="/blog2.jpg"
                alt="Left Image 2 (Landscape)"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[48%] h-[300px] relative">
              <Image
                src="/blog3.jpg"
                alt="Left Image 3 (Portrait)"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-[48%] h-[150px] relative">
              <Image
                src="/blog4.jpg"
                alt="Left Image 4 (Landscape)"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[20%] h-[300px] relative">
          <Image
            src="/blog5.jpg"
            alt="Middle Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 w-[30%] sm:w-[25%]">
          <div className="flex gap-4">
            <div className="w-[48%] h-[300px] relative">
              <Image
                src="/blog6.jpg"
                alt="Right Image 1 (Portrait)"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-[48%] h-[300px] relative">
              <Image
                src="/blog7.jpg"
                alt="Right Image 2 (Portrait)"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[48%] h-[250px] relative">
              <Image
                src="/blog8.jpg"
                alt="Right Image 3 (Portrait)"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-[48%] h-[250px] relative">
              <Image
                src="/blog9.jpg"
                alt="Right Image 4 (Portrait)"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};