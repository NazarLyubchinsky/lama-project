import { useTodoContext } from '@/context/useTodoContext';
import { userProps } from '@/lib/models'
import InputMask from 'react-input-mask';

interface PropsProfileInfoAbout {
	user: userProps
}

const ProfileInfoAbout = ({ user }: PropsProfileInfoAbout) => {
	const { userChange } = useTodoContext();
	return (
		<>
			<div className="profile__info">
				<input type="hidden" name="id" value={user._id} />
				<p className='profile__info-about profile__info-block'>
					<span className='profile__info-upper'>name</span>
					{userChange ?
						<input name="username" className='profile__info-input' required
							defaultValue={user.username} type="text" /> : user.username}
				</p>
				{/* {
					user?.phone && */}
				<p className='profile__info-about profile__info-block'>
					<span className='profile__info-upper'>phone*:</span>
					{userChange ? <InputMask mask={`+\(38)999-99-99-999`} className='profile__info-input'
						name='phone' required
						defaultValue={user?.phone} type="tel" /> : user?.phone ? user?.phone : '- - - - '}
				</p>
				{/* } */}
				<p className='profile__info-about profile__info-block'>
					<span className='profile__info-upper'>email</span>
					{userChange ?
						<input name="email" className='profile__info-input' required
							defaultValue={user.email} type="email" /> : user.email}
				</p>
			</div>
		</>
	)
}

export default ProfileInfoAbout