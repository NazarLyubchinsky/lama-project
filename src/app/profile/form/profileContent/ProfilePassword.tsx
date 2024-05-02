import { useTodoContext } from '@/context/useTodoContext';
import { userProps } from '@/lib/models';
import React from 'react'

interface PropsProfilePassword {
	user: userProps
}
const ProfilePassword = ({ user }: PropsProfilePassword) => {
	const { passwordChange } = useTodoContext();
	return (
		<div className='profile__info'>
			{
				passwordChange && <>
					<input type="hidden" name="id" value={user._id} />
					<p className='profile__info-about'>
						<span className='profile__info-upper'>New Password</span>
						<input className='profile__info-input' type="password" name='password' />
					</p>
					<p className='profile__info-about'>
						<span className='profile__info-upper'>Confirm password</span>
						<input className='profile__info-input' type="password" name='passwordRepeat' />
					</p>
				</>
			}
		</div>
	)
}

export default ProfilePassword