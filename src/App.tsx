import React from 'react';
import styles from '@css/App.module.scss';
import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import NavBarContainer from '@components/NavBar/NavBarContainer';
import Login from '@components/Login/Login';
import Footer from '@components/Footer/Footer';
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs';
import { GuestAccessiblePages, UserAccessiblePages } from '@interfaces-types/personalDataReducer';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

interface Props {
	accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const App: React.FC<Props> = (props) => {
	console.debug('App');

	const redirect = Object.keys(props.accessiblePages).map((pageName) => {
		if (props.accessiblePages[pageName].redirect) {
			return <Redirect key={pageName} from={props.accessiblePages[pageName].path} to={props.accessiblePages[pageName].redirect} />;
		}
	});
	const route = Object.keys(props.accessiblePages).map((pageName) => {
		const pageData = props.accessiblePages[pageName];
		const path = pageData.redirect?pageData.redirect:pageData.path;
		
		if (pageData.isContent) {
			return (
				<Route key={pageName} exact path={path}>
					<Header />
					<Breadcrumbs accessiblePages={props.accessiblePages} />
					<div className={styles.wrapper}>
						<NavBarContainer accessiblePages={props.accessiblePages} />
						<Content pageData={{name:pageName, ...pageData}} />
					</div>
					<Footer />
				</Route>
			)
		} else {
			return (
				<Route key={pageName} exact path={path}>
					<Login />
				</Route>
			)
		}
	});

	return (
		<div className={styles.app}>
			<Router>
				<Switch>
					{route}
					{redirect}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
