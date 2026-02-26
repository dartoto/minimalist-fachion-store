import React from 'react';
import { ShoppingBag, User, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-beige-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-normal tracking-widest text-darkgray-900">
                            MINIMA
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-sm tracking-wide text-darkgray-800 hover:text-darkgray-900 transition-colors uppercase">New Arrivals</Link>
                        <Link to="/" className="text-sm tracking-wide text-darkgray-800 hover:text-darkgray-900 transition-colors uppercase">Shop</Link>
                        <Link to="/" className="text-sm tracking-wide text-darkgray-800 hover:text-darkgray-900 transition-colors uppercase">About</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="text-darkgray-800 hover:text-darkgray-900 p-2">
                            <Search className="h-5 w-5" />
                        </button>
                        <Link to="/login" className="text-darkgray-800 hover:text-darkgray-900 p-2">
                            <User className="h-5 w-5" />
                        </Link>
                        <button className="text-darkgray-800 hover:text-darkgray-900 p-2 relative">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-darkgray-800 ring-2 ring-white" />
                        </button>
                        <button className="md:hidden text-darkgray-800 p-2">
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
