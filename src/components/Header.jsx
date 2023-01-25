import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Header() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`)
    }

    useEffect(()=> setText(keyword || ''), [keyword]);

    return (
        <header className='w-full flex justify-center p-4 text-2xl border-b border-zinc-600 mb-4'>
            <Link to='/' className='flex items-center'>
                < BsYoutube className='text-3xl text-brand'/>
                <h1 className='ml-2 text-2xl font-bold'>Youtube</h1>
            </Link>

            <form className='flex justify-center' type='submit' onSubmit={(e)=>handleSubmit(e)}>
                <input 
                    className='w-7/12 pl-5 p-2 outline-none bg-stone-900 text-neutral-400 rounded-tl-full rounded-bl-full border-t border-b border-l border-neutral-600' 
                    type="text" 
                    placeholder='Search'
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}}
                />
                <button 
                    className='p-3 px-6 bg-neutral-700 text-white rounded-tr-full rounded-br-full border border-neutral-600'>
                    <BsSearch/>
                </button>
            </form>
        </header>
    );
}

