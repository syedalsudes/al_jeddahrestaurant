import Image from 'next/image';

const FoodBanner = () => {
  return (
    <section className="relative w-full bg-maroon overflow-hidden py-16 md:py-24">
      
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(126,16,20,1) 0%, rgba(84,11,14,1) 100%)'
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h2 className="text-[15vw] font-black text-black/10 leading-none uppercase italic">
          Delicious
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <div className="mb-8">
          <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
            Limited Time Offer
          </span>
          <h1 className="text-warm-white text-5xl md:text-7xl font-extrabold italic uppercase tracking-tighter">
            The Ultimate <span className="text-accent-gold">Feast</span>
          </h1>
          <p className="text-brand-light/70 mt-4 max-w-xl mx-auto font-light">
            Savor the smoky, juicy, and crispy flavors of our signature platter. 
            Freshly prepared for the true food lovers.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto group">
          <div className="absolute -inset-10 bg-accent-gold/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative aspect-[21/9] drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]">
            <Image
              src="/bigimage.png"
              alt="Premium Food Platter"
              fill
              className="object-contain transition-transform duration-500 hover:scale-[1.02]"
              priority
            />
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-accent-gold hover:bg-[#d48900] text-maroon font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl">
            ORDER NOW — RS - 2499
          </button>
        </div>

      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/30 blur-2xl rounded-full" />

    </section>


  );
};

export default FoodBanner;