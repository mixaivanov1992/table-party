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
import { v4 as uuidv4 } from 'uuid';
import { LinkLocation } from '@interfaces-types/accessiblePage';

const Routes: React.FC = () => {
    console.info('Routes');
    const { accessiblePages } = useTypedSelector((state) => state.personalDataReducer);
    const redirectFilter = accessiblePages.filter((accessiblePage) => accessiblePage.pageRedirect);

    const redirects = redirectFilter.map((item) => {
        const { pageRoute, pageRedirect } = item;
        return <Redirect key={uuidv4()} from={pageRoute} to={pageRedirect || pageRoute} />;
    });

    const routes = accessiblePages.map((accessiblePage) => {
        const {
            pageRoute, pageRedirect, isContentComponent, componentName,
        } = accessiblePage;
        const route = pageRedirect || pageRoute;

        if (isContentComponent) {
            const headerFilter = accessiblePages.filter((item) => item.linkLocation.includes(LinkLocation.header));
            const navbarFilter = accessiblePages.filter((item) => item.linkLocation.includes(LinkLocation.navbar));
            const footerFilter = accessiblePages.filter((item) => item.linkLocation.includes(LinkLocation.footer));
            return (
                <Route key={uuidv4()} exact path={route}>
                    <Header accessiblePages={headerFilter} />
                    <Breadcrumbs accessiblePages={accessiblePages} />
                    <main className={styles.wrapper}>
                        <NavBarController accessiblePages={navbarFilter} />
                        <Content accessiblePage={accessiblePage} />
                    </main>
                    <Footer accessiblePages={footerFilter} />
                </Route>
            );
        }
        const Component = require(`./components/${componentName}/${componentName}`).default;
        return (
            <Route key={uuidv4()} exact path={route}>
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
