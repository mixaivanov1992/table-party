import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';

interface Props {
	isAuthorized: boolean
}

const NavBarContainer: React.FC<Props> = (props) => {
    const [toggle, setToggle] = useState(true);

    const clickToggle = () => {
        setToggle(!toggle);
    }

	return (
        <NavBar toggle={toggle} clickToggle={clickToggle} isAuthorized={props.isAuthorized} />
    );
}

export default NavBarContainer;