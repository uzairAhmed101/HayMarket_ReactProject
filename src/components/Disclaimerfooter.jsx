import React from 'react';

export default function FooterDisclaimer() {
  return (
    <div className="bg-gradient-to-br from-[#2D0F4A] to-[#1a0829] py-4 px-3 sm:py-6 sm:px-4 md:py-7 md:px-5 lg:py-8 lg:px-6 font-tusker">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-white/80 text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.8rem] leading-[1.4] sm:leading-[1.5] md:leading-[1.6] mb-4 sm:mb-5 md:mb-6 text-center">
          Disclaimer: Olivia D publishers is an independent entity and is not affiliated with, sponsored by, or associated with any other company in any way, nor a disposal center, involving but not limited to major publishing companies or corporations. All content, services, and products offered through our website are solely provided by Olivia Publishers, and are not endorsed or approved by any other entities. Olivia Publishers is a DBA of HW1 LLC.
        </p>
        
        <p className="text-white text-[0.7rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] font-medium mt-3 sm:mt-4 md:mt-5">
          © 2025 Olivia Publishers All rights reserved
        </p>
      </div>
    </div>
  );
}