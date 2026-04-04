import Image from 'next/image';
import {
    Star,
    Flame,
    Beef,
    Drumstick,
    UtensilsCrossed,
    ChefHat
} from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Seekh Kebab Classic",
        price: "Rs 850",
        image: "/burger.png",
        desc: "Traditional minced meat skewers infused with secret spices and charcoal smoke.",
        tag: "Best Seller",
        Icon: Flame
    },
    {
        id: 2,
        name: "Pulled Brisket",
        price: "Rs 900",
        image: "/burger.png",
        desc: "12-hour slow-smoked beef brisket, shredded and smothered in house BBQ sauce.",
        tag: "Popular",
        Icon: Beef
    },
    {
        id: 3,
        name: "Charred Wings",
        price: "Rs 600",
        image: "/burger.png",
        desc: "Crispy skin, juicy inside, tossed in a spicy habanero and honey glaze.",
        tag: "Spicy",
        Icon: Drumstick
    },
    {
        id: 4,
        name: "Smokehouse Bird",
        price: "Rs 1800",
        image: "/burger.png",
        desc: "Whole chicken marinated overnight and slow-roasted over hickory wood.",
        tag: "Feast",
        Icon: Drumstick
    },
    {
        id: 5,
        name: "Beef Ribs Rack",
        price: "Rs 2400",
        image: "/burger.png",
        desc: "Fall-off-the-bone tender ribs with a dark, caramelized spicy crust.",
        tag: "Premium",
        Icon: Beef
    },
    {
        id: 6,
        name: "Smoked Lamb Chops",
        price: "Rs 1650",
        image: "/burger.png",
        desc: "Succulent lamb chops grilled to perfection with rosemary smoke.",
        tag: "Chef's Choice",
        Icon: ChefHat
    },
    {
        id: 7,
        name: "Tandoori Platter",
        price: "Rs 3200",
        image: "/burger.png",
        desc: "A grand mix of tikka, kebab, and wings served with mint chutney.",
        tag: "Must Try",
        Icon: UtensilsCrossed
    },
    {
        id: 8,
        name: "Mutton Tikka",
        price: "Rs 1100",
        image: "/burger.png",
        desc: "Boneless mutton chunks marinated in yogurt and traditional red spices.",
        tag: "Classic",
        Icon: Flame
    }
];

const FavoritesSection = () => {
    return (
        <section className="w-full bg-warm-white py-24 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-20">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div className="max-w-2xl">
                        <h4 className="text-accent-gold font-bold tracking-[0.2em] uppercase mb-2">The Sizzle & Smoke</h4>
                        <h2 className="text-5xl md:text-6xl font-black text-brand-dark italic leading-tight">
                            Pitmaster&apos;s <span className="text-maroon font-black">Favorites</span>
                        </h2>
                    </div>
                    <div className="flex gap-3">
                        <span className="w-12 h-1.5 rounded-full bg-accent-gold"></span>
                        <span className="w-6 h-1.5 rounded-full bg-maroon"></span>
                        <span className="w-3 h-1.5 rounded-full bg-brand-muted"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[2.5rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] relative group transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_70px_rgba(84,11,14,0.12)] border border-maroon/5"
                        >

                            <div className="absolute top-0 left-6 -translate-y-1/2 bg-maroon w-14 h-16 rounded-b-2xl flex items-center justify-center text-white shadow-lg group-hover:h-20 transition-all duration-300">
                                <item.Icon size={28} strokeWidth={1.5} />
                            </div>

                            {item.tag && (
                                <div className="absolute top-4 right-8">
                                    <span className="text-[10px] font-black uppercase tracking-tighter text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full">
                                        {item.tag}
                                    </span>
                                </div>
                            )}

                            <div className="relative w-full h-44 mb-8 mt-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-accent-gold text-accent-gold" />
                                    ))}
                                </div>

                                <h3 className="text-brand-dark font-black text-2xl mb-2 group-hover:text-maroon transition-colors leading-tight">
                                    {item.name}
                                </h3>

                                <p className="text-brand-muted text-sm leading-relaxed mb-6 line-clamp-2 h-10 px-2">
                                    {item.desc}
                                </p>

                                <div className="flex flex-col items-center gap-4 mt-2">
                                    <p className="text-maroon font-black text-2xl tracking-tighter">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button className="group relative overflow-hidden bg-maroon text-warm-white px-12 py-5 rounded-full font-black text-lg transition-all shadow-2xl hover:shadow-maroon/40">
                        <span className="relative z-10 uppercase tracking-widest">Explore Full BBQ Menu</span>
                        <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-[20%] -left-20 w-[500px] h-[500px] bg-maroon/[0.03] rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-[10%] -right-20 w-[400px] h-[400px] bg-accent-gold/[0.03] rounded-full blur-[100px] -z-10"></div>
        </section>
    );
};

export default FavoritesSection;