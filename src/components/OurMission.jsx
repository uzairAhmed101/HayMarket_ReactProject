import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function MissionVisionCards() {
  return (
    <div className="w-full py-3 px-3">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mission Card */}
          <motion.div 
            className=" bg-gradient-to-r from-[#6c07a3] to-[#460666] rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-start text-left mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-2 ring-white/30 mb-3">
                <Target className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                OUR MISSION
              </h2>
            </div>
            
            <p className="text-white/90 text-sm leading-relaxed">
              To empower authors with the tools, expertise, and support they 
              need to transform their manuscripts into professionally published 
              works that captivate readers and stand the test of time.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            className=" bg-gradient-to-r from-[#6c07a3] to-[#460666] rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-start text-left mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-2 ring-white/30 mb-3">
                <Eye className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                OUR VISION
              </h2>
            </div>
            
            <p className="text-white/90 text-sm leading-relaxed">
              To be the world's most author-centric publishing house, where every 
              writer feels valued, supported, and given the best chance to share their 
              dreams through innovation, integrity, and excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
