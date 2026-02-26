import React from 'react';
import { products } from '../lib/data';
import ProductCard from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative h-[85vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
                    alt="Hero"
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-darkgray-900/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-normal text-white mb-6 tracking-tight">The Art of Less</h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg font-light">
                        Discover our Spring/Summer collection of minimalist essentials.
                    </p>
                    <button className="bg-white text-darkgray-900 px-10 py-4 text-sm tracking-widest uppercase hover:bg-beige-100 transition-colors">
                        Explore Collection
                    </button>
                </div>
            </section>

            {/* Featured Products */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-normal text-darkgray-900 mb-2">New Arrivals</h2>
                        <p className="text-sm text-darkgray-800 uppercase tracking-widest">Latest from the studio</p>
                    </div>
                    <button className="flex items-center text-sm text-darkgray-800 hover:text-darkgray-900 group transition-colors uppercase tracking-widest">
                        View All <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translateX-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="bg-beige-100 py-24">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-normal text-darkgray-900 mb-8 tracking-wide italic uppercase">Our Philosophy</h2>
                    <p className="text-xl text-darkgray-800 leading-relaxed font-light mb-10 italic">
                        "Simplicity is the ultimate sophistication."
                    </p>
                    <p className="text-sm text-darkgray-800 leading-relaxed max-w-2xl mx-auto">
                        We believe in creating pieces that transcend trends. Each garment is designed with meticulous attention to detail and crafted from the finest natural materials to ensure longevity and comfort.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
