import { ReactNode } from 'react';
import styles from '../style.module.scss';

const ProfileInfoAbout = ({ children, infoName }: { children: ReactNode, infoName: string }) => {
	return (
		<p className={styles.profile__info_about}>
			<span className={styles.profile__info_upper}>{infoName}</span>
			{children}
		</p>
	)
}

export default ProfileInfoAbout