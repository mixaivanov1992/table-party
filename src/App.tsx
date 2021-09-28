import React from 'react';
import styles from '@css/App.module.scss';
import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import NavBarContainer from '@src/components/NavBar/NavBarContainer';
import Login from '@components/Login/Login';
import Footer from '@components/Footer/Footer';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { Path, ContentPath } from '@src/assets/interfaces-types/path';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

const App: React.FC = () => {
    console.debug('App');

	const chunk = (path:ContentPath) => {
		return (
			<>
				<Header />
				<Breadcrumbs />
				<div className={styles.wrapper}>
					<div>
						<NavBarContainer />
						<Content path={path} />
					</div>
				</div>
				<Footer />
			</>
		);
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
					<Route path="/">
						{chunk(Path.home)}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
