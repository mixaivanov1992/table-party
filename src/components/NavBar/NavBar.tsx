import React from 'react';
import styles from '@css/NavBar.module.scss';
import { Link } from "react-router-dom";
import { IoArrowUndoCircleSharp, IoArrowRedoCircleSharp, IoHome, IoDiceSharp } from 'react-icons/io5';
import { ImUsers } from "react-icons/im";

interface Props {
    clickToggle(): void,
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
                            <Link to="/rules">Правила</Link>
                        </li>
                        <li>
                            <Link to="/about">О нас</Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={props.clickToggle} className={styles.toggle}><IoArrowUndoCircleSharp size={40} color={'#24292f'}/></div>
            </div>
        );
    }else{
        return (
            <div className={styles.min_navbar}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><IoHome size={40} color={'#24292f'}/></Link>
                        </li>
                        <li>
                            <Link to="/rules"><IoDiceSharp size={40} color={'#24292f'}/></Link>
                        </li>
                        <li>
                            <Link to="/about"><ImUsers size={40} color={'#24292f'}/></Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={props.clickToggle} className={styles.toggle}><IoArrowRedoCircleSharp size={40} color={'#24292f'}/></div>
            </div>
        );
    }
}

export default NavBar;