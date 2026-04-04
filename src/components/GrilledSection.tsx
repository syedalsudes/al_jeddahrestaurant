"use client";

import { motion } from 'framer-motion';

const GrilledSection = () => {
    return (
        <section className="relative bg-warm-white py-28 overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-5xl md:text-6xl font-serif text-brand-dark mb-8 tracking-tight uppercase leading-none">
                        Grilled, Hot <span className="italic">&</span> Smoky
                    </h2>

                    <p className="text-brand-muted max-w-3xl mx-auto text-lg md:text-base leading-relaxed mb-12 font-medium opacity-90">
                        Our secret lies in the wood-fired grill. Every bite is infused with 
                        authentic smoky flavor that keeps you coming back for more. 
                        Experience the true essence of traditional charcoal grilling.
                    </p>

                    <button className="bg-maroon text-warm-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-maroon-light transition-all shadow-[0_10px_20px_rgba(84,11,14,0.2)] active:scale-95">
                        Order Now
                    </button>
                </motion.div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-maroon/5 blur-[120px] rounded-full"></div>
            </div>
        </section>
    );
};

export default GrilledSection;