import {
    // eslint-disable-next-line
    HashRouter, Redirect, Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { LinkLocation } from '@interfaces-types/accessiblePage';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs';
import Content from '@components/Content/Content';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import NavBarController from '@src/components/NavBar/NavBarController';
import React from 'react';
import styles from '@css/Route.module.scss';

const Routes: React.FC = () => {
    console.info('Routes');
    const { accessiblePages } = useTypedSelector((state) => state.personalDataReducer);
    const redirectFilter = accessiblePages.filter((accessiblePage) => accessiblePage.pageRedirect);

    const redirects = redirectFilter.map((item) => {
        const { pageRoute, pageRedirect } = item;
        return <Redirect key={uuidv4()} exact from={pageRoute} to={pageRedirect || pageRoute} />;
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
        // github pages use HashRouter // Router
        <HashRouter>
            <Switch>
                {routes}
                {redirects}
            </Switch>
        </HashRouter>
    );
};

export default Routes;