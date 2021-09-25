import React from 'react';
import styles from '@css/NavBar.module.scss';
import { Link } from "react-router-dom";
import { IoArrowUndoCircleSharp, IoArrowRedoCircleSharp, IoHome, IoDiceSharp, IoAccessibility } from 'react-icons/io5';

interface Props {
    clickToggle: any,
    toggle: boolean
}

const NavBar: React.FC<Props> = (props) => {
    console.debug('NavBar');
    if(props.toggle){
        return (
            <div className={styles.navbar}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/about">Правила</Link>
                        </li>
                        <li>
                            <Link to="/login">О нас</Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={props.clickToggle} className={styles.toggle}><IoArrowUndoCircleSharp size={40} color={'#000'}/></div>
            </div>
        );
    }else{
        return (
            <div className={styles.min_navbar}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><IoHome size={40} color={'#000'}/></Link>
                        </li>
                        <li>
                            <Link to="/about"><IoDiceSharp size={40} color={'#000'}/></Link>
                        </li>
                        <li>
                            <Link to="/login"><IoAccessibility size={40} color={'#000'}/></Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={props.clickToggle} className={styles.toggle}><IoArrowRedoCircleSharp size={40} color={'#000'}/></div>
            </div>
        );
    }
}

export default NavBar;