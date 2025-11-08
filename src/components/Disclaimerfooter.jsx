import React from 'react';

export default function FooterDisclaimer() {
  return (
    <div className="bg-gradient-to-br from-[#2D0F4A] to-[#1a0829] py-[30px] px-[20px] font-tusker">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-[rgba(255,255,255,0.8)] text-[0.8rem] leading-[1.6] mb-[20px] text-center md:text-[0.75rem] md:leading-[1.5] sm:text-[0.7rem] sm:leading-[1.5] xs:text-[0.65rem] xs:leading-[1.4]">
          Disclaimer: Olivia D publishers is an independent entity and is not affiliated with, sponsored by, or associated with any other company in any way, nor a disposal center, involving but not limited to major publishing companies or corporations. All content, services, and products offered through our website are solely provided by Olivia Publishers, and are not endorsed or approved by any other entities. Olivia Publishers is a DBA of HW1 LLC.
        </p>
        
        <p className="text-white text-[0.85rem] font-medium mt-[20px] md:text-[0.8rem] sm:text-[0.75rem] sm:mt-[15px] xs:text-[0.7rem] xs:mt-[15px]">
          © 2025 Olivia Publishers All rights reserved
        </p>
      </div>
    </div>
  );
}