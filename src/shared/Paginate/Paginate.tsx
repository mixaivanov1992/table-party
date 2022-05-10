import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from '@css/shared/paginate/Paginate.module.scss';
import PaginateItems from './PaginateItems';

interface Props {
    renderContent(index: number): JSX.Element,
    chapterCount: number,
    itemsPerPage: number
}

const Paginate: React.FC<Props> = (props) => {
    console.debug('Paginate');

    const { renderContent, chapterCount, itemsPerPage } = props;
    const paginateItems = [...Array(chapterCount)].map((empty, i) => i);

    const [pageCount, setPageCount] = useState(Math.ceil(chapterCount / itemsPerPage));
    const [itemOffset, setItemOffset] = useState(0);
    const currentItems = paginateItems.slice(itemOffset, itemOffset + itemsPerPage);

    useEffect(() => {
        setPageCount(Math.ceil(chapterCount / itemsPerPage));
    }, [chapterCount, itemsPerPage]);

    const handlePageClick = (event: {selected: number}) => {
        const newOffset = (event.selected * itemsPerPage) % chapterCount;
        setItemOffset(newOffset);
    };
    return (
        <>
            <PaginateItems renderContent={renderContent} currentItems={currentItems} />
            <div className={styles.paginate}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="»"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="«"
                    breakClassName={styles.paginate_item}
                    breakLinkClassName={styles.paginate_link}
                    pageClassName={styles.paginate_item}
                    pageLinkClassName={styles.paginate_link}
                    previousClassName={styles.paginate_item}
                    previousLinkClassName={styles.paginate_link}
                    nextClassName={styles.paginate_item}
                    nextLinkClassName={styles.paginate_link}
                    activeClassName={styles.active}
                />
            </div>
        </>
    );
};

export default Paginate;
