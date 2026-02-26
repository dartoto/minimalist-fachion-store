import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-beige-100 border-t border-beige-200 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-xl font-normal tracking-widest text-darkgray-900 mb-6 italic uppercase">MINIMA</h2>
                        <p className="text-sm text-darkgray-800 max-w-xs leading-relaxed">
                            Curating timeless essentials for the modern wardrobe. Quality, simplicity, and sustainability at the core of everything we do.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-darkgray-900 uppercase tracking-widest mb-6 mt-2">Customer Care</h3>
                        <ul className="space-y-4">
                            <li><button className="text-sm text-darkgray-800 hover:text-darkgray-900 transition-colors">Shipping & Returns</button></li>
                            <li><button className="text-sm text-darkgray-800 hover:text-darkgray-900 transition-colors">Size Guide</button></li>
                            <li><button className="text-sm text-darkgray-800 hover:text-darkgray-900 transition-colors">FAQ</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-normal text-darkgray-900 uppercase tracking-widest mb-6 mt-2">Connect</h3>
                        <ul className="space-y-4">
                            <li><button className="text-sm text-darkgray-800 hover:text-darkgray-900 transition-colors">Instagram</button></li>
                            <li><button className="text-sm text-darkgray-800 hover:text-darkgray-900 transition-colors">Pinterest</button></li>
                            <li><button className="text-sm text-darkgray-800 hover:text-darkgray-900 transition-colors">Newsletter</button></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-beige-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-darkgray-800 uppercase tracking-widest">
                    <p>&copy; 2026 MINIMA STUDIO. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-6">
                        <button className="hover:text-darkgray-900 transition-colors">Privacy Policy</button>
                        <button className="hover:text-darkgray-900 transition-colors">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
