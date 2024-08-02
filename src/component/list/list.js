'use client'
import Card from '../card/card.js';
import Pagination from '../pagination/pagination.js';
import listStyles from './listStyle.js';
import Head from "next/head";
export default function List({ data, totalPage, page }) {
    return (
        <>
            <div className='container'>
                {
                    data.map((item, index) => <Card dataItem={item} key={index} />)
                }
                <style jsx list>
                    {listStyles}
                </style>
            </div>
            <Pagination currentPage={page} numPages={totalPage} />
        </>
    );
}