import { GuestAccessiblePages, UserAccessiblePages } from '@src/assets/interfaces-types/personalDataReducer';
import React, { useEffect, useState } from 'react';

import MinNavBar from './MinNavBar';
import NavBar from './NavBar';

interface Props {
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const NavBarContainer: React.FC<Props> = (props) => {
    const item = localStorage.getItem('toggle');
    const [toggle, setToggle] = useState<boolean>(item !== null ? JSON.parse(item) : true);
    const { accessiblePages } = props;

    useEffect(() => {
        localStorage.setItem('toggle', JSON.stringify(toggle ? '1' : ''));
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
