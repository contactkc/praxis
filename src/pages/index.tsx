import type { NextPage } from 'next';
import React from 'react';
import DarkVeil from '@/components/DarkVeil';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
    return (
        <>
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <div className="absolute inset-0 z-10"><Navbar /></div>
                <div className="absolute inset-0 -z-10">
                    <DarkVeil className="pointer-events-none" />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-3xl mb-2 font-normal backdrop-blur mb-8">From prompt into protocol.</p>
                    <div className="flex justify-center gap-4">
                        <button className="px-6 py-2 bg-white text-black text-sm font-light rounded-3xl transition hover:cursor-pointer pointer-events-auto">Get Started</button>
                        <button className="px-6 py-2 bg-zinc-900 text-zinc-400 border border-zinc-800 border-opacity-0 text-sm font-light rounded-3xl transition hover:cursor-pointer pointer-events-auto">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;