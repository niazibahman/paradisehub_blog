'use client'
import globalStyles from '@/style/global.js';
import Header from '../header/header';
export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className='container'>
                {children}
                <style jsx global>
                    {globalStyles}
                </style>
            </main>
        </div>
    );
}