import React from 'react';
import styles from '@css/App.module.scss';
import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import NavBarContainer from '@components/NavBar/NavBarContainer';
import Login from '@components/Login/Login';
import Footer from '@components/Footer/Footer';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { Path, ContentPath } from '@src/assets/interfaces-types/path';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

interface Props {
	isAuthorized: boolean
}

const App: React.FC<Props> = (props) => {
    console.debug('App');

	const chunk = (path:ContentPath) => {
		return (
			<>
				<Header />
				<Breadcrumbs />
				<div className={styles.wrapper}>
					<div>
						<NavBarContainer isAuthorized={props.isAuthorized}/>
						<Content path={path} />
					</div>
				</div>
				<Footer />
			</>
		);
	}

	const isAuthorized = (path:ContentPath) => {
		if(props.isAuthorized){
            return (
				<Route path={`/${path}`}>
					{chunk(path)}
				</Route>
			)
		}
	}

	return (
		<div className={styles.app}>
			<Router>
				<Switch>
					<Route path={`/${Path.login}`}>
						<Login />
					</Route>
					<Route path={`/${Path.about}`}>
						{chunk(Path.about)}
					</Route>
					<Route path={`/${Path.rules}`}>
						{chunk(Path.rules)}
					</Route>
					{isAuthorized(Path.myRules)}
					{isAuthorized(Path.newRule)}
					<Route path="/">
						{chunk(Path.home)}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
