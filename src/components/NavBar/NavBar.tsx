import React from 'react';
import styles from '@css/NavBar.module.scss';
import { Link } from "react-router-dom";
import { IoArrowUndoCircleSharp, IoArrowRedoCircleSharp, IoHome, IoDiceSharp } from 'react-icons/io5';
import { ImUsers } from "react-icons/im";
import { IoLibrarySharp } from "react-icons/io5";
import { Path } from '@src/assets/interfaces-types/path';

interface Props {
    clickToggle(): void,
    toggle: boolean,
    isAuthorized: boolean
}

const NavBar: React.FC<Props> = (props) => {
    console.debug('NavBar');

	const isAuthorized = () => {
		if(props.isAuthorized){
            if(props.toggle){
                return (
                    <li>
                        <Link to={`/${Path.myRules}`}>Моя библиотека правил</Link>
                    </li>
                )
            }else{
                return (
                    <li>
                        <Link to={`/${Path.myRules}`}><IoLibrarySharp size={40} color={'#24292f'}/></Link>
                    </li>
                )
            }
		}
	}
    
    if(props.toggle){
        return (
            <div className={styles.navbar}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        {
                            isAuthorized()
                        }
                        <li>
                            <Link to={`/${Path.rules}`}>Правила</Link>
                        </li>
                        <li>
                            <Link to={`/${Path.about}`}>О нас</Link>
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
                        {
                            isAuthorized()
                        }
                        <li>
                            <Link to={`/${Path.rules}`}><IoDiceSharp size={40} color={'#24292f'}/></Link>
                        </li>
                        <li>
                            <Link to={`/${Path.about}`}><ImUsers size={40} color={'#24292f'}/></Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={props.clickToggle} className={styles.toggle}><IoArrowRedoCircleSharp size={40} color={'#24292f'}/></div>
            </div>
        );
    }
}

export default NavBar;