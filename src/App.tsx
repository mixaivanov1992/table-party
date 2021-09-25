import React from 'react';
import styles from '@css/App.module.scss';
import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import NavBarContainer from '@src/components/NavBar/NavBarContainer';
import Footer from './components/Footer/Footer';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<div className={styles.wrapper}>
					<NavBarContainer />
					<Content />
				</div>
				<Footer />
				<Switch>
					<Route path="/about">
						{/* <About /> */}
					</Route>
					<Route path="/users">
						{/* <Users /> */}
					</Route>
					<Route path="/">
						{/* <Home /> */}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
