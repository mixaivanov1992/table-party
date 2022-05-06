import { GuestAccessiblePages, UserAccessiblePages } from '@src/assets/interfaces-types/personalDataReducer';
import React, { useEffect, useState } from 'react';

import MinNavBar from './MinNavBar';
import NavBar from './NavBar';

interface Props {
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const NavBarContainer: React.FC<Props> = (props) => {
    const storage = localStorage.getItem('toggle');
    const [toggle, setToggle] = useState<boolean>(storage !== null ? JSON.parse(storage) : true);
    const { accessiblePages } = props;

    useEffect(() => {
        if (toggle) {
            localStorage.setItem('toggle', JSON.stringify(true));
        } else {
            localStorage.setItem('toggle', JSON.stringify(false));
        }
    }, [toggle]);

    const onClickToggle = () => {
        setToggle(!toggle);
    };
    if (toggle) {
        return <NavBar onClickToggle={onClickToggle} accessiblePages={accessiblePages} />;
    }
    return <MinNavBar onClickToggle={onClickToggle} accessiblePages={accessiblePages} />;
};

export default NavBarContainer;
