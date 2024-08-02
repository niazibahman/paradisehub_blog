import Link from 'next/link.js';
import headerStyles from './headerStyle.js';
export default function Header() {
    return (
        <header>
                <ul className='header-container'>
                    <li className='nav-item'><Link href={'/'}>Home</Link></li>
                    <li className='nav-item'><Link href={'/CreatePost'}>Create Post</Link></li>
                </ul>
            <style jsx header>
                {headerStyles}
            </style>
        </header>
    );
}