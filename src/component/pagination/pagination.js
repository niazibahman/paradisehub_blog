'use client'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import paginationStyles from './paginationStyle.js';
import { useRouter } from 'next/navigation.js';

export default function Pagination({ currentPage, numPages }) {
    const router = useRouter();
    const changePageNumberHandler = (nextPage) => {
        let nextPageURL = "/";
        if (nextPage > 1) {
            nextPageURL = nextPageURL + "?page=" + nextPage.toString();
        }
        router.push(nextPageURL);
    }

    if (numPages <= 6) {
        return (<div className="pagination">
            <button onClick={() => changePageNumberHandler(currentPage - 1)} disabled={currentPage === 1 ? true : false} className='pagination-item'><IoArrowBack color="#8f8f8f" fontSize={20} /></button>
            {
                Array.from({ length: numPages }, (_, index) => <button key={index} onClick={() => changePageNumberHandler(index + 1)} className={`${currentPage === (index + 1) ? "pagination-item-active" : "pagination-item"}`}>{index + 1}</button>)
            }
            <button onClick={() => changePageNumberHandler(currentPage + 1)} disabled={currentPage === numPages ? true : false} className={`pagination-item"}`}><IoArrowForward color="#8f8f8f" fontSize={20} /></button>
            <style jsx pagination>
                {paginationStyles}
            </style>
        </div>);
    } else {
        return (<div className="pagination">
            <button onClick={() => changePageNumberHandler(currentPage - 1)} disabled={currentPage === 1 ? true : false} className='pagination-item'><IoArrowBack color="#8f8f8f" fontSize={20} /></button>
            {
                currentPage > 3 ? <button onClick={() => changePageNumberHandler(1)} className={`${currentPage === 1 ? "pagination-item-active" : "pagination-item"}`}>1</button> : null
            }
            {
                currentPage > 3 ? <button className='pagination-item'>...</button> : null
            }
            {
                currentPage <= 3 ?
                    Array.from({ length: 3 }, (_, index) => <button key={index} onClick={() => changePageNumberHandler(index + 1)} className={` ${currentPage === (index + 1) ? "pagination-item-active" : "pagination-item"}`}>{index + 1}</button>)
                    : null
            }
            {
                currentPage > 3 && (numPages - currentPage) > 2 ?
                    Array.from({ length: 3 }, (_, index) => <button key={index} onClick={() => changePageNumberHandler(index + (currentPage - 1))} className={` ${currentPage === (index + (currentPage - 1)) ? "pagination-item-active" : "pagination-item"}`}>{index + (currentPage - 1)}</button>) : null
            }
            {
                (numPages - currentPage) <= 2 ?
                    Array.from({ length: 3 }, (_, index) => <button key={index} onClick={() => changePageNumberHandler(numPages - (2 - index))} className={` ${currentPage === (numPages - (2 - index)) ? "pagination-item-active" : "pagination-item"}`}>{numPages - (2 - index)}</button>)
                    : null
            }
            {
                (numPages - currentPage) > 2 ? <button className='pagination-item'>...</button> : null
            }
            {
                (numPages - currentPage) > 2 ? <button onClick={() => changePageNumberHandler(numPages)} className={` ${currentPage === numPages ? "pagination-item-active" : "pagination-item"}`}>{numPages}</button> : null
            }
            <button onClick={() => changePageNumberHandler(currentPage + 1)} disabled={currentPage === numPages ? true : false} className={` ${currentPage === numPages ? "pagination-item-active" : "pagination-item"}`}><IoArrowForward color="#8f8f8f" fontSize={20} /></button>
            <style jsx pagination>
                {paginationStyles}
            </style>
        </div>);
    }
}