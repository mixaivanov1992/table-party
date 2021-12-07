import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';

interface Props {
	isAuthorized: boolean
}

const NavBarContainer: React.FC<Props> = (props) => {
    const [toggle, setToggle] = useState(true);

    const onClickToggle = () => {
        setToggle(!toggle);
    }

	return (
        <NavBar toggle={toggle} onClickToggle={onClickToggle} isAuthorized={props.isAuthorized} />
    );
}

export default NavBarContainer;