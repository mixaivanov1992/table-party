import React from 'react';
import styles from '@css/App.module.scss';
import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import NavBarContainer from '@components/NavBar/NavBarContainer';
import Login from '@components/Login/Login';
import Footer from '@components/Footer/Footer';
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs';
import { GuestAccessiblePages, UserAccessiblePages } from '@interfaces-types/personalDataReducer';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

interface Props {
    accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const App: React.FC<Props> = (props) => {
    console.debug('App');

    const { accessiblePages } = props;

    const redirect = Object.keys(accessiblePages).map((pageName) => {
        if (accessiblePages[pageName].redirect) {
            const { path } = accessiblePages[pageName];
            return <Redirect key={pageName} from={path} to={accessiblePages[pageName].redirect} />;
        }
        return undefined;
    });
    const route = Object.keys(accessiblePages).map((pageName) => {
        const pageData = accessiblePages[pageName];
        const path = pageData.redirect ? pageData.redirect : pageData.path;

        if (pageData.isContent) {
            return (
                <Route key={pageName} exact path={path}>
                    <Header />
                    <Breadcrumbs accessiblePages={accessiblePages} />
                    <div className={styles.wrapper}>
                        <NavBarContainer accessiblePages={accessiblePages} />
                        <Content pageData={{ name: pageName, ...pageData }} />
                    </div>
                    <Footer />
                </Route>
            );
        }
        return (
            <Route key={pageName} exact path={path}>
                <Login />
            </Route>
        );
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
};

export default App;
