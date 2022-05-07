import React from 'react';
import styles from '@css/Route.module.scss';
import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import NavBarController from '@src/components/NavBar/NavBarController';
import Footer from '@components/Footer/Footer';
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useTypedSelector } from '@hooks/useTypedSelector';

const Routes: React.FC = () => {
    console.debug('Routes');
    const { accessiblePages } = useTypedSelector((state) => state.personalDataReducer);

    const pageAliases = Object.keys(accessiblePages);
    const redirectAliases = pageAliases.filter((alias) => accessiblePages[alias].redirect);
    const redirects = redirectAliases.map((alias) => {
        const { path, redirect } = accessiblePages[alias];
        return <Redirect key={alias} from={path} to={redirect} />;
    });

    const routes = pageAliases.map((alias) => {
        const pageData = accessiblePages[alias];
        const path = pageData.redirect ? pageData.redirect : pageData.path;

        if (pageData.isContent) {
            return (
                <Route key={alias} exact path={path}>
                    <Header />
                    <Breadcrumbs accessiblePages={accessiblePages} />
                    <main className={styles.wrapper}>
                        <NavBarController accessiblePages={accessiblePages} />
                        <Content pageData={{ alias, ...pageData }} />
                    </main>
                    <Footer />
                </Route>
            );
        }

        const Component = require(`./components/${pageData.component}/${pageData.component}`).default;
        return (
            <Route key={alias} exact path={path}>
                <Component />
            </Route>
        );
    });

    return (
        <Router>
            <Switch>
                {routes}
                {redirects}
            </Switch>
        </Router>
    );
};

export default Routes;
