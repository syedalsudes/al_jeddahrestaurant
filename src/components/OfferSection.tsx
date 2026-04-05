'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OfferSection = () => {
  return (
    <section className="relative w-full bg-[#540b0e] overflow-hidden py-16 md:py-24">
      
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(126,16,20,1) 0%, rgba(84,11,14,1) 100%)'
        }}
      />

      <motion.div 
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h2 className="text-[18vw] font-black text-black leading-none uppercase italic">
          Delicious
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-20 left-10 hidden md:block"
      >
        <div className="w-12 h-12 bg-green-900/30 blur-sm rounded-full border-2 border-green-500/20" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-20 right-10 hidden md:block"
      >
        <div className="w-16 h-16 bg-orange-900/20 blur-sm rounded-full border-2 border-[#ffb703]/20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-[#ffb703] font-bold tracking-[0.3em] uppercase text-sm mb-2 block">
            — Limited Time Offer —
          </span>
          <h1 className="text-white text-5xl md:text-8xl font-extrabold italic uppercase tracking-tighter leading-tight">
            The Ultimate <br /> 
            <span className="text-[#ffb703] drop-shadow-[0_5px_15px_rgba(255,183,3,0.3)]">Feast</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 mt-6 max-w-xl mx-auto font-light text-lg italic"
          >
            Savor the smoky, juicy, and crispy flavors of our signature platter. 
            Freshly prepared for the true food lovers.
          </motion.p>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto group">
          <motion.div 
             initial={{ y: 100, opacity: 0, scale: 0.9 }}
             whileInView={{ y: 0, opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
             className="relative"
          >
            <div className="absolute -inset-10 bg-[#ffb703]/10 blur-[120px] rounded-full opacity-60" />
            
            <div className="relative aspect-[21/9] drop-shadow-[0_45px_55px_rgba(0,0,0,0.8)]">
              <Image
                src="/bigimage.png"
                alt="Premium Food Platter"
                fill
                className="object-contain transition-transform duration-700 hover:scale-[1.03]"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <button className="relative overflow-hidden bg-[#ffb703] hover:bg-[#e6a600] text-[#540b0e] font-black px-12 py-5 rounded-full transition-all transform hover:scale-110 active:scale-95 shadow-[0_10px_30px_rgba(255,183,3,0.4)] group">
            <span className="relative z-10">ORDER NOW — RS. 2,499</span>
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-20 h-full bg-white/30 skew-x-12 z-0"
            />
          </button>
          
          <p className="text-white/40 text-xs mt-4 tracking-widest uppercase">
            *Terms and conditions apply
          </p>
        </motion.div>

      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/40 blur-[100px] rounded-full" />

    </section>
  );
};

export default OfferSection;