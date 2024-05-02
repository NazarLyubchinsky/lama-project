import { useTodoContext } from '@/context/useTodoContext';
import { useFormStatus } from 'react-dom';



const ProfileButton = ({ change }) => {
	const { userChange } = useTodoContext();
	const { pending } = useFormStatus();
	return (
		change &&
		<>
			<button className='profile__info-save' aria-disabled={pending} disabled={pending}>{pending ? 'pending...' : 'save'}</button>
		</>


	)
}

export default ProfileButton