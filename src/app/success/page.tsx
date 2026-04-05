"use client";

import Link from 'next/link';
import { CheckCircle, Package, Home } from 'lucide-react';

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-warm-white flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-[3rem] p-10 shadow-xl text-center border border-maroon/5 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-maroon/5 rounded-full blur-2xl"></div>
                
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle className="text-green-600" size={48} />
                </div>
                
                <h1 className="text-4xl font-black text-brand-dark italic mb-4">
                    Order <span className="text-maroon">Confirmed!</span>
                </h1>
                
                <p className="text-brand-muted mb-10 text-balance">
                    Zabardast! Humne aapka order receive kar liya hai. Hamara pitmaster aag jalane hi wala hai! 
                    <br/><br/>
                    Aapko jald hi confirmation call mil jayegi.
                </p>

                <div className="space-y-4 relative z-10">
                    <Link href="/" className="flex items-center justify-center gap-2 w-full bg-maroon text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg active:scale-95">
                        <Home size={20} /> Back to Home
                    </Link>
                    
                    <div className="flex items-center justify-center gap-2 text-brand-muted text-sm font-bold pt-4">
                        <Package size={18} className="text-maroon" /> Estimated Delivery: 30-45 Mins
                    </div>
                </div>
            </div>
        </div>
    );
}