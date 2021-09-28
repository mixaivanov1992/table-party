import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@css/Breadcrumbs.module.scss';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs();
	
	return (
		<React.Fragment>
			<div className={styles.wrapper}>
				<ul>
					{
						breadcrumbs.map(({ match, breadcrumb }) => {
							return <li key={match.url}><Link to={match.url}>{breadcrumb}</Link></li>
						})
					}
				</ul>
			</div>
		</React.Fragment>
	);
}

export default Breadcrumbs;