import { useFormStatus } from 'react-dom';

import styles from './style.module.scss';

interface PropsProfileButton {
	change: boolean
}

const ProfileButton = ({ change }: PropsProfileButton) => {
	const { pending } = useFormStatus();
	return (
		change &&
		<>
			<button className={styles.profile__info_save} aria-disabled={pending} disabled={pending}>{pending ? 'pending...' : 'save'}</button>
		</>
	)
}

export default ProfileButton


