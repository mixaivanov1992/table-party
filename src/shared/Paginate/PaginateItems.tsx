import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from '@css/shared/paginate/PaginateItem.module.scss';

interface Props {
    content: JSX.Element[],
    currentItems: number[]
}
const PaginateItems: React.FC<Props> = (props) => {
    const { content, currentItems } = props;
    return (
        <TransitionGroup>
            {
                currentItems
                && currentItems.map((item) => (
                    <CSSTransition
                        key={uuidv4()}
                        timeout={200}
                        classNames={{
                            enter: styles.paginate_enter,
                            enterActive: styles.paginate_enter_active,
                            exit: styles.paginate_exit,
                            exitActive: styles.paginate_exit_active,
                        }}
                    >
                        {content[item]}
                    </CSSTransition>
                ))
            }
        </TransitionGroup>
    );
};

export default PaginateItems;
