import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className} select-none`}>
      {/* Visual Icon from the image */}
      <div className="flex items-end gap-[3px] h-10">
        <div className="w-2.5 h-6 bg-neon rounded-full opacity-50"></div>
        <div className="w-2.5 h-10 bg-gradient-to-t from-neon to-neon/60 rounded-full"></div>
        <div className="w-2.5 h-8 bg-neon rounded-full"></div>
        <div className="w-2.5 h-5 bg-neon/80 rounded-full"></div>
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col -space-y-1">
        <div className="flex items-center gap-2">
           <span className="text-3xl font-black italic tracking-tighter text-neon leading-none">MHS</span>
           <span className="text-3xl font-black italic tracking-tighter text-white leading-none">TECH</span>
        </div>
        <span className="text-[7px] font-bold tracking-[0.4em] text-gray-400 uppercase">Level up your reality</span>
      </div>
    </div>
  );
}
