import type { Product } from '../types';

export const products: Product[] = [
    {
        id: '1',
        name: 'Silk Blouse',
        description: 'A luxurious silk blouse with a relaxed fit and elegant drape. Perfect for both formal and casual occasions.',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&q=80&w=800',
        category: 'Tops'
    },
    {
        id: '2',
        name: 'Pleated Trousers',
        description: 'High-waisted pleated trousers crafted from a premium blend of wool and polyester for a sharp, clean silhouette.',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
        category: 'Bottoms'
    },
    {
        id: '3',
        name: 'Knit Sweater',
        description: 'A cozy, oversized knit sweater made from 100% organic cotton. Features a subtle ribbed texture.',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1576185055363-6d7c88000919?auto=format&fit=crop&q=80&w=800',
        category: 'Knitwear'
    },
    {
        id: '4',
        name: 'Slip Dress',
        description: 'A minimalist silk slip dress with delicate spaghetti straps and a flattering bias cut.',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
        category: 'Dresses'
    }
];
