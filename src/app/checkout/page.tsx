"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';
import { CreditCard, Truck, MessageSquare, User, Mail, Phone, MapPin } from 'lucide-react';

const CheckoutPage = () => {
    const router = useRouter();
    const { cart, clearCart } = useCartStore();

    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 150 : 0;
    const total = subtotal + deliveryFee;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        clearCart();

        router.push('/success');
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-warm-white flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-black text-brand-dark mb-4 italic">Empty tray? No BBQ for you!</h2>
                <Link href="/" className="bg-maroon text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-brand-dark transition-all">
                    Go Back to Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-warm-white pb-20">
            <div className="bg-white border-b border-maroon/5 py-20 mb-8">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-black text-brand-dark italic uppercase">
                        Final <span className="text-maroon">Checkout</span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-maroon/5">
                            <h2 className="text-2xl font-black text-brand-dark mb-6 flex items-center gap-3 italic">
                                <User className="text-maroon" /> Delivery Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-muted uppercase ml-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-4 text-maroon/40" size={20} />
                                        <input required name="name" onChange={handleInputChange} type="text" placeholder="Full Name" className="w-full bg-warm-white border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-maroon outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-muted uppercase ml-2">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-4 text-maroon/40" size={20} />
                                        <input required name="email" onChange={handleInputChange} type="email" placeholder="email@example.com" className="w-full bg-warm-white border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-maroon outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-brand-muted uppercase ml-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-4 text-maroon/40" size={20} />
                                        <input required name="phone" onChange={handleInputChange} type="tel" placeholder="03xx xxxxxxx" className="w-full bg-warm-white border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-maroon outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-brand-muted uppercase ml-2">Complete Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-4 text-maroon/40" size={20} />
                                        <textarea required name="address" onChange={handleInputChange} rows={3} placeholder="Complete Address, Landmark, Area..." className="w-full bg-warm-white border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-maroon outline-none transition-all resize-none"></textarea>
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-brand-muted uppercase ml-2">Order Note (Optional)</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 text-maroon/40" size={20} />
                                        <textarea name="message" onChange={handleInputChange} rows={2} placeholder="Any Special Instruction?" className="w-full bg-warm-white border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-maroon outline-none transition-all resize-none"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-maroon/5">
                            <h2 className="text-2xl font-black text-brand-dark mb-6 flex items-center gap-3 italic">
                                <CreditCard className="text-maroon" /> Payment Method
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label className={`relative flex items-center p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-maroon bg-maroon/5' : 'border-warm-white hover:border-maroon/20'}`}>
                                    <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="hidden" />
                                    <Truck className={`mr-4 ${paymentMethod === 'cod' ? 'text-maroon' : 'text-brand-muted'}`} />
                                    <div className="flex flex-col">
                                        <span className="font-black text-brand-dark uppercase">Cash on Delivery</span>
                                        <span className="text-xs text-brand-muted">Ghar pe paise dein</span>
                                    </div>
                                </label>
                                <label className="relative flex items-center p-6 rounded-2xl border-2 border-dashed border-gray-200 cursor-not-allowed opacity-60">
                                    <CreditCard className="mr-4 text-brand-muted" />
                                    <div className="flex flex-col">
                                        <span className="font-black text-brand-muted uppercase">Card / Online</span>
                                        <span className="text-xs text-maroon font-bold italic">Coming Soon!</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-brand-dark text-white rounded-[2.5rem] p-8 sticky top-8 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                            <h3 className="text-2xl font-black italic mb-6 border-b border-white/10 pb-4 relative">Summary</h3>
                            
                            <div className="space-y-4 mb-8 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center text-sm">
                                        <span className="text-white/70">{item.quantity}x {item.name}</span>
                                        <span className="font-bold whitespace-nowrap ml-4">Rs {item.price * item.quantity}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                                <div className="flex justify-between text-white/60">
                                    <span>Subtotal</span>
                                    <span>Rs {subtotal}</span>
                                </div>
                                <div className="flex justify-between text-white/60">
                                    <span>Delivery</span>
                                    <span>Rs {deliveryFee}</span>
                                </div>
                                <div className="flex justify-between text-xl font-black pt-2 border-t border-white/10">
                                    <span>Total</span>
                                    <span className="text-accent-gold underline decoration-maroon underline-offset-4">Rs {total}</span>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-maroon hover:bg-white hover:text-maroon text-white py-5 rounded-2xl font-black text-lg transition-all uppercase tracking-widest shadow-lg active:scale-95">
                                Place Order Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;