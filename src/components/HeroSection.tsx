"use client";

import Image from 'next/image';
import { motion } from 'framer-motion'; 

const Hero = () => {
    return (
        <section className="relative min-h-[110vh] bg-maroon flex items-center overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-brand-light"
                >
                    <h2 className="text-accent-gold font-bold tracking-widest mb-2">SMOKY & SAVORY</h2>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        PERFECTED <br />
                        <span className="text-accent-red">BBQ & BURGERS</span>
                    </h1>
                    <p className="text-lg text-brand-light/80 mb-8 max-w-md">
                        Discover the authentic taste of wood-fired smoke and perfectly grilled meats, crafted with passion.
                    </p>
                    <button className="bg-accent-red hover:bg-maroon-light px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl">
                        Order Now
                    </button>
                </motion.div>

                <div className="relative flex justify-center items-center h-[500px] md:h-[650px] mt-10 md:mt-0">

                    <motion.div
                        
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: "easeInOut"
                        }}
                        className="w-full max-w-[450px] sm:max-w-[550px] md:max-w-[650px]"
                    >
                        <Image
                            src="/burger.png" 
                            alt="Huge Juicy Burger"
                            className="w-full h-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.7)]" // Deep shadow for depth
                            width={650}
                            height={650}
                        />
                    </motion.div>

                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path d="M0 0v47.6l5-2c1 0 11 3 12 0 2 3 6-3 6 0 0-4 12 3 12 0 0 3 15-1 17 0 2-2 5-1 6 0 0-2 6 2 6 0s2 4 4 0c5 2 12-3 16 0 2-2 4-3 4 0 0 2 6-1 6 0 1 4 15-2 17 0h7c0 1 3-3 6 0h17c2 2 3 1 6 0h6c1-2 21-1 24 0 2 1 4 2 6 0 0-1 22 4 24 0 0 0 5-3 5 0 2-2 10 2 12 0 2 2 6 1 6 0 2 3 4-2 6 0 1 0 25-2 25 1l10-1c3 1 6 6 7 0 1 5 4-2 6 0 2-2 4 3 5 0h12c6 1 36 2 36 0 0 2 3 0 6 0h6c5-2 7 4 11 0 2 0 15 2 17 0h13c3-4 5 1 7 0h29c0-3 6 0 6 0h5c0 2 16-1 18 0 1 4 9-1 12 0s6-2 6 0c8-2 3 4 13 0h10c3 4 19 1 19 0 2 0 21 1 23-1 1 4 3-1 6 1 1 2 11-1 12-1 3 3 9 0 12 1 3-4 6 1 6 0h6c0-3 5 1 6-1 0 3 2 1 4 1 3 4 10-1 13 0 3-2 6-1 6 0 2 2 2 0 6 0 1-2 6 2 6 0 2 0 4 5 6 0h18c2 3 4 1 6 0l6-1c3 2 12 3 17 1 14 3 18 1 24 0 2-1 3 3 5 0 6 2 10-1 16 0 1 3 6 0 9 0 0-2 3 2 5 0 6-6 8 7 13 0 0-2 5 2 5 0 3 3 10 0 10 0 1 2 5-2 8 0 3-1 8 3 12 0h6c2 1 10 4 12 0h6c1-1 5 2 6 0 1 2 4-1 6 0 0-2 5 3 6-1 2 1 6 5 5 1 1 1 3-2 6 0 2-1 5 3 6 0 0 1 6 2 6 0 2 3 4-4 6 0 0-2 3 2 6 0 3 0 6 3 6 0 5 3 8-1 13 0 3-4 6 1 6 0h5c0-1 9 2 12 0 1-1 9 3 11 0h6c2 2 4 4 7 0 3 2 5-4 5-1 10 4 15-2 18 2 0-1 6 2 6-2 0 0 6-2 6 1 1 6 12 2 12 0 1 3 4-3 7 2 2-2 5 2 5 0 1 5 4-5 6 0 2-1 4 2 6 0 1 3 1 0 5 0V0H0Z" 
                fill="#FAF3F0"></path></svg>
            </div>
        </section>
    );
};

export default Hero;