import React from 'react';
import { FiCoffee, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='w-full flex justify-between justify-center p-4 text-2xl border-b border-fuchsia-200 mb-4'>
            <Link to='/' className='flex items-center'>
                < FiCoffee className='text-3xl text-fuchsia-600 '/>
                <h1 className='ml-2 text-2xl text-fuchsia-600 font-bold'>Shoppy</h1>
            </Link>

            <ul className='flex items-center space-x-6'>
                <li>
                    <Link to='/products' className='flex items-center'>
                        <h1 className='ml-2 text-xl'>Products</h1>
                    </Link>
                </li>

                <li>
                    <Link to='/cart' className='flex items-center'>
                        <FiShoppingCart className='text-bold' />
                    </Link>
                </li>
                <li>
                    <Link to='/login' className='flex items-center'>
                        <button className='p-2 bg-fuchsia-600 text-fuchsia-100 rounded'>
                            Log In
                        </button>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

