import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@css/breadcrumbs/Breadcrumbs.module.scss';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import Localization from '@localization/breadcrumbs/';
import { GuestAccessiblePages, UserAccessiblePages } from '@src/assets/interfaces-types/personalDataReducer';

interface Props {
	accessiblePages: GuestAccessiblePages | UserAccessiblePages
}

const Breadcrumbs: React.FC<Props> = (props) => {
	const breadcrumbs = useBreadcrumbs();
	//Localization.setLanguage('en');
	return (
		<>
			<div className={styles.wrapper}>
				<ul>
					{
						breadcrumbs.map(({ match }) => {
							for(const pageName in props.accessiblePages){
								if (match.url === props.accessiblePages[pageName].path) {
									const localizationIndex = pageName;
									return <li key={match.url}><Link to={match.url}>{Localization[localizationIndex]}</Link></li>
								}
							}
						})
					}
				</ul>
			</div>
		</>
	);
}

export default Breadcrumbs;