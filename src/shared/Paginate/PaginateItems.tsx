import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    renderContent(index: number): JSX.Element,
    currentItems: number[]
}
const PaginateItems: React.FC<Props> = (props) => {
    console.debug('PaginateItem');
    const { renderContent, currentItems } = props;
    return (
        <>
            {
                currentItems.map((item) => (<Fragment key={uuidv4()}>{renderContent(item)}</Fragment>))
            }
        </>
    );
};

export default PaginateItems;
