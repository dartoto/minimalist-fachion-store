import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/data';
import { ChevronLeft, Star, ShoppingCart } from 'lucide-react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="pt-32 pb-24 text-center">
                <h2 className="text-2xl font-normal text-darkgray-900 mb-4 tracking-wide uppercase">Product Not Found</h2>
                <Link to="/" className="text-sm text-darkgray-800 hover:text-darkgray-900 underline underline-offset-4 uppercase tracking-widest">
                    Return to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-sm text-darkgray-800 hover:text-darkgray-900 mb-12 group transition-colors uppercase tracking-widest">
                <ChevronLeft className="mr-2 h-4 w-4 transform group-hover:translateX-[-2px] transition-transform" /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="aspect-[3/4] overflow-hidden bg-beige-100">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                    <div className="mb-8">
                        <p className="text-xs text-darkgray-800 uppercase tracking-widest mb-2">{product.category}</p>
                        <h1 className="text-4xl font-normal text-darkgray-900 mb-4 tracking-tight">{product.name}</h1>
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="text-2xl font-normal text-darkgray-900">${product.price.toFixed(2)}</span>
                            <div className="flex items-center border-l border-beige-200 pl-4 h-4">
                                <Star className="h-4 w-4 text-darkgray-800 fill-darkgray-800" />
                                <span className="text-xs text-darkgray-800 ml-1 uppercase tracking-wider">4.9 (124 reviews)</span>
                            </div>
                        </div>
                        <p className="text-sm text-darkgray-800 leading-relaxed mb-8 max-w-md">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex space-x-4">
                            <button className="flex-1 bg-darkgray-800 text-white flex items-center justify-center space-x-2 px-8 py-4 text-sm tracking-widest uppercase hover:bg-darkgray-900 transition-colors">
                                <ShoppingCart className="h-4 w-4" />
                                <span>Add to Cart</span>
                            </button>
                        </div>

                        <div className="pt-8 border-t border-beige-200">
                            <h3 className="text-sm font-normal text-darkgray-900 uppercase tracking-widest mb-6">Order with PayPal</h3>
                            <div className="max-w-md">
                                <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || "test" }}>
                                    <PayPalButtons
                                        style={{ layout: "vertical", color: "black", shape: "rect", label: "checkout" }}
                                        createOrder={(_data, actions) => {
                                            return actions.order.create({
                                                intent: "CAPTURE",
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            currency_code: "USD",
                                                            value: product.price.toString(),
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        <details className="border-t border-beige-200 pt-4 cursor-pointer group">
                            <summary className="list-none flex justify-between items-center text-xs font-normal text-darkgray-900 uppercase tracking-widest">
                                Materials & Care
                                <ChevronLeft className="h-4 w-4 rotate-[-90deg] group-open:rotate-90 transition-transform" />
                            </summary>
                            <p className="text-xs text-darkgray-800 mt-4 leading-relaxed">
                                100% sustainably sourced. Dry clean only for lasting quality.
                            </p>
                        </details>
                        <details className="border-t border-b border-beige-200 py-4 cursor-pointer group">
                            <summary className="list-none flex justify-between items-center text-xs font-normal text-darkgray-900 uppercase tracking-widest">
                                Shipping & Returns
                                <ChevronLeft className="h-4 w-4 rotate-[-90deg] group-open:rotate-90 transition-transform" />
                            </summary>
                            <p className="text-xs text-darkgray-800 mt-4 leading-relaxed">
                                Complimentary worldwide shipping on orders over $250. 14-day return window.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
