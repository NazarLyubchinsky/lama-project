import { useTodoContext } from '@/context/useTodoContext';
import { userProps } from '@/lib/models';
import React from 'react'
import styles from '../style.module.scss';
import ProfileInfoAbout from './ProfileInfoAbout';


interface PropsProfilePassword {
	user: userProps
}
const ProfileInfoPassword = ({ user }: PropsProfilePassword) => {
	const { passwordChange } = useTodoContext();
	return (
		<div className={styles.profile__info}>
			{
				passwordChange && <>
					<input type="hidden" name="id" value={user._id} />
					<ProfileInfoAbout infoName={'New Password'}>
						<input className={styles.profile__info_input} type="password" name='password' />
					</ProfileInfoAbout>
					<ProfileInfoAbout infoName={'Confirm password'}>
						<input className={styles.profile__info_input} type="password" name='passwordRepeat' />
					</ProfileInfoAbout>
				
				</>
			}
		</div>
	)
}

export default ProfileInfoPassword