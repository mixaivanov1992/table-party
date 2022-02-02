import { GuestAccessiblePages, UserAccessiblePages } from '@src/assets/interfaces-types/personalDataReducer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MinNavBar from './MinNavBar';
import NavBar from './NavBar';

interface Props {
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const NavBarContainer: React.FC<Props> = (props) => {
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const item = localStorage.getItem("toggle");
        if (item !== null) {
            setToggle(JSON.parse(item));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('toggle', JSON.stringify(toggle?'1':''));
    }, [toggle])

    const onClickToggle = () => {
        setToggle(!toggle);
    }
    if (toggle) {
        return <NavBar onClickToggle={onClickToggle} accessiblePages={props.accessiblePages} />;
    } else {
        return <MinNavBar onClickToggle={onClickToggle} accessiblePages={props.accessiblePages} />;
    }
}

export default NavBarContainer;