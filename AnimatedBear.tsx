
import React from 'react';

interface AnimatedBearProps {
  isDancing?: boolean;
}

const AnimatedBear: React.FC<AnimatedBearProps> = ({ isDancing = false }) => {
  return (
    <div className={`relative w-48 h-56 ${isDancing ? 'animate-dance' : ''}`}>
      {/* Head */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-28 bg-[#8B4513] rounded-full shadow-lg">
        {/* Ears */}
        <div className="absolute top-[-10px] left-[-10px] w-12 h-12 bg-[#A0522D] rounded-full shadow-md"></div>
        <div className="absolute top-[-10px] right-[-10px] w-12 h-12 bg-[#A0522D] rounded-full shadow-md"></div>
        {/* Inner Ears */}
        <div className="absolute top-[2px] left-[2px] w-8 h-8 bg-[#D2B48C] rounded-full"></div>
        <div className="absolute top-[2px] right-[2px] w-8 h-8 bg-[#D2B48C] rounded-full"></div>
        
        {/* Snout */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-12 bg-[#D2B48C] rounded-full shadow-inner">
           {/* Nose */}
           <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-4 bg-black rounded-full"></div>
           {/* Mouth */}
           <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-4 border-b-2 border-l-2 border-r-2 border-black rounded-b-full"></div>
        </div>
        
        {/* Eyes */}
        <div className="absolute top-12 left-8 w-5 h-5 bg-black rounded-full">
            <div className="w-2 h-2 bg-white rounded-full ml-0.5 mt-0.5"></div>
        </div>
        <div className="absolute top-12 right-8 w-5 h-5 bg-black rounded-full">
            <div className="w-2 h-2 bg-white rounded-full ml-0.5 mt-0.5"></div>
        </div>
      </div>
      
      {/* Body */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-36 bg-[#8B4513] rounded-t-full rounded-b-lg shadow-xl">
        {/* Tummy Patch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#D2B48C] rounded-full"></div>
      </div>
      
      {/* Arms */}
      <div className="absolute top-28 left-0 w-12 h-20 bg-[#A0522D] rounded-full -rotate-45 shadow-md"></div>
      <div className="absolute top-28 right-0 w-12 h-20 bg-[#A0522D] rounded-full rotate-45 shadow-md"></div>
      
       {/* Legs */}
       <div className="absolute bottom-[-10px] left-5 w-14 h-12 bg-[#A0522D] rounded-full shadow-md"></div>
       <div className="absolute bottom-[-10px] right-5 w-14 h-12 bg-[#A0522D] rounded-full shadow-md"></div>
    </div>
  );
};

export default AnimatedBear;