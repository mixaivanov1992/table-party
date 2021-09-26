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
import { Path } from '@src/assets/interfaces-types/path';

function App() {
    console.debug('App');
	return (
		<div className={styles.app}>
			<Router>
				<Switch>
					<Route path={`/${Path.login}`}>
						<Login />
					</Route>
					<Route path={`/${Path.about}`}>
						<Header />
						<div className={styles.wrapper}>
							<div>
								<NavBarContainer />
								<Content path={Path.about} />
							</div>
						</div>
						<Footer />
					</Route>
					<Route path={`/${Path.rules}`}>
						<Header />
						<div className={styles.wrapper}>
							<div>
								<NavBarContainer />
								<Content path={Path.rules} />
							</div>
						</div>
						<Footer />
					</Route>
					<Route path="/">
						<Header />
						<div className={styles.wrapper}>
							<div>
								<NavBarContainer />
								<Content path={Path.home} />
							</div>
						</div>
						<Footer />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
