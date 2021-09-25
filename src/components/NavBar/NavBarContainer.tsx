import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';


const NavBarContainer: React.FC = () => {
    const [toggle, setToggle] = useState(true);

    const clickToggle = () => {
        setToggle(!toggle);
    }

	return (
        <NavBar toggle={toggle} clickToggle={clickToggle}/>
    );
}

export default NavBarContainer;