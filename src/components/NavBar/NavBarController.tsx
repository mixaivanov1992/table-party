import { AccessiblePages } from '@interfaces-types/accessiblePage';
import React, { useEffect, useState } from 'react';

import MinNavBar from './MinNavBar';
import NavBar from './NavBar';

interface Props {
    accessiblePages: AccessiblePages
}

const NavBarController: React.FC<Props> = (props) => {
    const localStorageToggle = localStorage.getItem('toggle');
    const [toggle, setToggle] = useState<boolean>(localStorageToggle !== null ? JSON.parse(localStorageToggle) : true);
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

export default NavBarController;
