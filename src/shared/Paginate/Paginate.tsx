import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from '@css/shared/paginate/Paginate.module.scss';
import PaginateItems from './PaginateItems';

interface Props {
    renderContent(index: number): JSX.Element,
    items: Array<number>,
    itemsPerPage: number
}

const Paginate: React.FC<Props> = (props) => {
    const { renderContent, items, itemsPerPage } = props;

    const [currentItems, setCurrentItems] = useState<Array<number>>([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick = (event: {selected: number}) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
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
                    // containerClassName={styles.pagination}
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
