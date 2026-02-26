import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../src/components/ProductCard';
import { Product } from '../src/types';

const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    description: 'Test Description',
    price: 10.00,
    image: 'test.jpg',
    category: 'Test'
};

describe('ProductCard', () => {
    it('renders product information correctly', () => {
        render(
            <BrowserRouter>
                <ProductCard product={mockProduct} />
            </BrowserRouter>
        );

        expect(screen.getByText('Test Product')).toBeDefined();
        expect(screen.getByText('$10.00')).toBeDefined();
        expect(screen.getByText('TEST')).toBeDefined();
    });
});
