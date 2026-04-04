"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

const CartPage = () => {
    const { cart, addToCart, decreaseQuantity, removeFromCart } = useCartStore();

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 150 : 0; 
    const total = subtotal + deliveryFee;

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-warm-white flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-white p-12 rounded-[3rem] shadow-xl flex flex-col items-center">
                    <div className="w-24 h-24 bg-maroon/10 rounded-full flex items-center justify-center mb-6">
                        <ShoppingBag className="text-maroon" size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-brand-dark mb-2 italic">Your Cart is Empty</h2>
                    <p className="text-brand-muted mb-8 max-w-xs">Looks like you haven&apos;t added any sizzle to your tray yet!</p>
                    <Link href="/" className="bg-maroon text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-brand-dark transition-all">
                        Back to Menu
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-warm-white pb-20">
            {/* Header */}
            <div className="bg-white border-b border-maroon/5 py-10 mb-8">
                <div className="container mx-auto px-6">
                    <Link href="/" className="flex items-center gap-2 text-maroon font-bold mb-4 hover:gap-4 transition-all">
                        <ArrowLeft size={20} /> Back to Pitmaster&apos;s Favorites
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black text-brand-dark italic">
                        Your <span className="text-maroon">Selection</span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Items List */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-maroon/5 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-all">
                                <div className="relative w-32 h-32 flex-shrink-0">
                                    <Image 
                                        src={item.image} 
                                        alt={item.name} 
                                        fill 
                                        className="object-contain group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                
                                <div className="flex-grow text-center sm:text-left">
                                    <h3 className="text-xl font-black text-brand-dark">{item.name}</h3>
                                    <p className="text-maroon font-bold">Rs {item.price}</p>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-4 bg-warm-white p-2 rounded-2xl">
                                    <button 
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-dark hover:bg-maroon hover:text-white transition-all shadow-sm"
                                    >
                                        <Minus size={18} />
                                    </button>
                                    <span className="font-black text-lg w-6 text-center">{item.quantity}</span>
                                    <button 
                                        onClick={() => addToCart(item)}
                                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-dark hover:bg-maroon hover:text-white transition-all shadow-sm"
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>

                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-4 text-brand-muted hover:text-maroon transition-colors"
                                >
                                    <Trash2 size={24} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-brand-dark text-white rounded-[2.5rem] p-8 sticky top-8 shadow-2xl">
                            <h3 className="text-2xl font-black italic mb-8 border-b border-white/10 pb-4">Order Summary</h3>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-white/70">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-white">Rs {subtotal}</span>
                                </div>
                                <div className="flex justify-between text-white/70">
                                    <span>Delivery Fee</span>
                                    <span className="font-bold text-white">Rs {deliveryFee}</span>
                                </div>
                                <div className="h-px bg-white/10 my-4"></div>
                                <div className="flex justify-between text-xl font-black">
                                    <span>Total Amount</span>
                                    <span className="text-accent-gold underline decoration-maroon underline-offset-4">Rs {total}</span>
                                </div>
                            </div>

                            <Link href="/checkout" className="block w-full">
                                <button className="w-full bg-maroon hover:bg-white hover:text-maroon text-white py-5 rounded-2xl font-black text-lg transition-all uppercase tracking-widest shadow-lg">
                                    Proceed to Checkout
                                </button>
                            </Link>
                            
                            <p className="text-[10px] text-center mt-6 text-white/40 uppercase tracking-tighter">
                                Delivery available in local area only
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartPage;