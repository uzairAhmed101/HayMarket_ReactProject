import React from 'react';
import { motion } from 'framer-motion';

export default function TopBar() {
  return (
    <div className="bg-[#35015F] w-full font-tusker min-h-[30px] overflow-hidden">
      <div className="w-full relative">
        <motion.div
          className="whitespace-nowrap inline-block"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear",
            delay: 0
          }}
        >
          <span className="text-white text-[10px] md:text-[13px] lg:text-[13px] sm:text-[12px] xs:text-[11px] xxs:text-[10px] leading-normal sm:leading-[1.6] xs:leading-[1.7] py-2">
            Disclaimer: Crestwood Publications is an independent publishing-services company. We provide editing, formatting, design, account setup assistance, and marketing consulting for authors. We are not affiliated with or endorsed by Amazon, Barnes & Noble, Apple Books, Kobo, Walmart, Target, TV networks, or any other third party. We do not guarantee sales, rankings, reviews, or media placements. All approvals, listings, and payouts are determined solely by each platform or outlet. All trademarks are the property of their respective owners.
          </span>
        </motion.div>
      </div>
    </div>
  );
}