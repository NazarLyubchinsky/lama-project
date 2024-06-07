import { useTodoContext } from '@/context/useTodoContext';
import { userProps } from '@/lib/models'
import InputMask from 'react-input-mask';
import styles from '../style.module.scss';
import ProfileInfoAbout from './ProfileInfoAbout';


interface PropsProfileInfoAbout {
	user: userProps
}

const ProfileInfoPersonalData = ({ user }: PropsProfileInfoAbout) => {
	const { userChange } = useTodoContext();
	return (
		<>
			<div className={styles.profile__info}>
				<input type="hidden" name="id" value={user._id} />
				<ProfileInfoAbout infoName={'name'}>
					{userChange ?
						<input name="username" className={styles.profile__info_input} required
							defaultValue={user.username} type="text" />
						: <span className={styles.profile__info_text}>
							{user.username}
						</span>}
				</ProfileInfoAbout>

				<ProfileInfoAbout infoName={'phone'}>
					{userChange ?
						<InputMask mask={`+\(38)999-99-99-999`} className={styles.profile__info_input}
							name='phone' required
							defaultValue={user?.phone} type="tel" /> : user?.phone ?
							<span className={styles.profile__info_text}>
								{user?.phone}
							</span>
							: '- - - - '}
				</ProfileInfoAbout>
				<ProfileInfoAbout infoName={'email'}>
					{userChange ?
						<input name="email" className={styles.profile__info_input} required
							defaultValue={user.email} type="email" />
						:
						<span className={styles.profile__info_text}>
							{user.email}
						</span>
					}
				</ProfileInfoAbout>
			</div>
		</>
	)
}

export default ProfileInfoPersonalData