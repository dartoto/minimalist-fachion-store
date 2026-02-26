import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group relative">
            <div className="aspect-[3/4] overflow-hidden bg-beige-100 transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                        to={`/product/${product.id}`}
                        className="bg-darkgray-800 text-white px-6 py-2 text-sm tracking-widest uppercase hover:bg-darkgray-900 transition-colors"
                    >
                        View Details
                    </Link>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-darkgray-900 font-normal">
                        <Link to={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-xs text-darkgray-800 uppercase tracking-wider">{product.category}</p>
                </div>
                <p className="text-sm font-normal text-darkgray-800">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
