import { LucideIcon } from 'lucide-react';

export interface Product {
    id: number;
    name: string;
    price: number; 
    image: string;
    desc: string;
    tag?: string;
    Icon: LucideIcon;
}

export interface CartItem extends Product {
    quantity: number;
}