'use client'
import Link from 'next/link.js';
import cardStyles from './cardStyle.js';
export default function Card({ dataItem }) {
    return (
        <article className='card'>
            <h2 className='card-header'>{dataItem.title}</h2>
            <p className='card-body'>{dataItem.body}</p>
            <Link href={'/'+dataItem.id}>Read More</Link>
            <style jsx card>
                {cardStyles}
            </style>
        </article>
    );
}