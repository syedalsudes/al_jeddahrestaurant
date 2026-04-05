"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import {
    Minus,
    Plus,
    Trash2,
    ArrowLeft,
    ShoppingBag,
    Flame,
    Clock,
} from 'lucide-react';

const CartPage = () => {
    const { cart, addToCart, decreaseQuantity, removeFromCart } = useCartStore();

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 150 : 0;
    const total = subtotal + deliveryFee;

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-warm-white flex flex-col items-center justify-center p-6 text-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-maroon/5 blur-2xl rounded-full"></div>
                    <div className="bg-white p-16 rounded-[4rem] shadow-2xl relative flex flex-col items-center border border-maroon/5">
                        <div className="w-32 h-32 bg-warm-white rounded-full flex items-center justify-center mb-8 shadow-inner">
                            <ShoppingBag className="text-maroon/20" size={60} />
                        </div>
                        <h2 className="text-4xl font-black text-brand-dark mb-4 italic">Your Tray is <span className="text-maroon">Cold</span></h2>
                        <p className="text-brand-muted mb-10 max-w-sm text-lg">
                            Looks like you haven&apos;t added any sizzle yet. Our pitmaster is waiting for your selection!
                        </p>
                        <Link href="/" className="group relative overflow-hidden bg-maroon text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all">
                            <span className="relative z-10">Start Your Feast</span>
                            <div className="absolute inset-0 bg-brand-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-warm-white pb-24">
            <div className="bg-white border-b border-maroon/5 pt-20 pb-12 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                    <Flame size={200} className="text-maroon" />
                </div>
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-black text-brand-dark italic leading-none">
                        Review Your <span className="text-maroon">Feast</span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-8 space-y-8">
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-xl font-black text-brand-dark uppercase tracking-tight flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-maroon"></span>
                                Selected Items ({cart.length})
                            </h2>
                        </div>

                        {cart.map((item) => (
                            <div key={item.id} className="bg-white rounded-[3rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-maroon/5 flex flex-col md:flex-row items-center gap-8 group hover:border-maroon/20 transition-all">
                                <div className="relative w-40 h-40 bg-warm-white rounded-[2.5rem] p-4 flex-shrink-0 overflow-hidden shadow-inner">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex-grow text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-2xl font-black text-brand-dark group-hover:text-maroon transition-colors">{item.name}</h3>
                                        <p className="text-maroon font-black text-xl italic">Rs {item.price * item.quantity}</p>
                                    </div>
                                    <p className="text-brand-muted text-sm mb-6 line-clamp-1 italic">Pit-smoked Perfection</p>

                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                                        <div className="flex items-center gap-4 bg-warm-white px-4 py-2 rounded-2xl border border-maroon/5">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="text-brand-muted hover:text-maroon transition-colors p-1"
                                            >
                                                <Minus size={18} strokeWidth={3} />
                                            </button>
                                            <span className="font-black text-xl w-8 text-center text-brand-dark">{item.quantity}</span>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="text-brand-muted hover:text-maroon transition-colors p-1"
                                            >
                                                <Plus size={18} strokeWidth={3} />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-widest transition-colors"
                                        >
                                            <Trash2 size={16} /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="lg:col-span-4">
                        <div className="sticky top-12">
                            <div className="bg-white rounded-[2.5rem] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-maroon/5 overflow-hidden">

                                <div className="bg-maroon p-8 text-white rounded-t-[2.3rem] relative overflow-hidden">
                                    <Flame className="absolute -right-4 -bottom-4 text-white/10 rotate-12" size={120} />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-[2px] bg-accent-gold"></div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold/90">Order Summary</span>
                                        </div>
                                        <h3 className="text-3xl font-black italic uppercase tracking-tighter">Your <span className="text-accent-gold">Bill</span></h3>
                                    </div>
                                </div>

                                <div className="p-8 bg-white">
                                    <div className="space-y-5">
                                        <div className="flex justify-between items-center group">
                                            <span className="text-brand-muted font-bold text-sm uppercase tracking-widest group-hover:text-maroon transition-colors">Cart Subtotal</span>
                                            <div className="flex-grow border-b border-dotted border-gray-200 mx-4 mb-1"></div>
                                            <span className="text-brand-dark font-black text-lg">Rs {subtotal}</span>
                                        </div>

                                        <div className="flex justify-between items-center group">
                                            <span className="text-brand-muted font-bold text-sm uppercase tracking-widest group-hover:text-maroon transition-colors">Delivery Fee</span>
                                            <div className="flex-grow border-b border-dotted border-gray-200 mx-4 mb-1"></div>
                                            <span className="text-brand-dark font-black text-lg">Rs {deliveryFee}</span>
                                        </div>

                                        <div className="mt-8 p-4 bg-warm-white rounded-2xl border border-maroon/5 flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-maroon">
                                                <Clock size={24} strokeWidth={2.5} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-maroon uppercase tracking-widest leading-none mb-1">Estimated Arrival</p>
                                                <p className="text-brand-dark font-black">25 - 35 Minutes</p>
                                            </div>
                                        </div>

                                        <div className="pt-8 mt-4 border-t-2 border-dashed border-gray-100">
                                            <div className="flex justify-between items-end mb-8">
                                                <div>
                                                    <p className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] mb-1">Final Amount</p>
                                                    <p className="text-5xl font-black text-brand-dark italic leading-none tracking-tighter">
                                                        <span className="text-maroon text-2xl mr-1">Rs</span>{total}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-[9px] font-black uppercase rounded-full tracking-widest mb-2">Secure Payment</span>
                                                </div>
                                            </div>

                                            <Link href="/checkout" className="block group mt-6">
                                                <button className="relative w-full bg-maroon overflow-hidden text-white py-4 rounded-xl font-black text-sm transition-all shadow-lg active:scale-[0.98] group-hover:shadow-maroon/30">

                                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

                                                    <div className="absolute inset-0 bg-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                    <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-[0.2em]">
                                                        Checkout Now
                                                        <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={16} strokeWidth={3} />
                                                    </span>
                                                </button>
                                            </Link>

                                        </div>
                                    </div>

                                    <div className="mt-8 flex flex-col items-center gap-3">
                                        <p className="text-[9px] text-brand-muted font-bold uppercase tracking-[0.3em] text-center">
                                            Fresh from the pit to your doorstep
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-4 text-brand-muted/40 uppercase font-black text-[10px] tracking-widest">
                                <span className="flex items-center gap-1"><Flame size={12} /> Real Charcoal</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>No Preservatives</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartPage;