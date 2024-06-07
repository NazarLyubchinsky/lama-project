"use client"
import styles from './style.module.scss'

import { userProps } from '@/lib/models';
import { editUser, editUserPassword } from '@/lib/action';

import ProfileChange from './profileContent/ProfileChange';
import ProfileInfoPersonalData from './profileContent/ProfileInfo/ProfileInfoPersonalData';
import ProfileButton from './profileContent/ProfileButton';
import { useFormState } from 'react-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileInfoPassword from './profileContent/ProfileInfo/ProfileInfoPassword';
import { useTodoContext } from '@/context/useTodoContext';
import useFormToast from '@/hooks/useFormToast';

interface PropsForm {
	user: userProps
}
const Form = ({ user }: PropsForm) => {
	const [stateUser, formAction] = useFormState(editUser, undefined);
	const [statePassword, formActionPassword] = useFormState(editUserPassword, undefined);
	const { userChange, setUserChange, setPasswordChange, passwordChange } = useTodoContext();

	useFormToast(stateUser)
	useFormToast(statePassword)

	return (
		<div className={styles.profile__form}>
			<form action={formAction} className={styles.profile__content}>
				<ProfileChange title={'Personal data'} onClick={() => setUserChange(!userChange)} change={userChange} />
				<ProfileInfoPersonalData user={user} />
				<ProfileButton change={userChange} />
				<ToastContainer containerId={'updatedUser'} />
			</form >
			<form action={formActionPassword} className={styles.profile__content}>
				<ProfileChange title={'Password'} onClick={() => setPasswordChange(!passwordChange)} change={passwordChange} />
				<ProfileInfoPassword user={user} />
				<ProfileButton change={passwordChange} />
				<ToastContainer containerId={'updatedPassword'} />
			</form >
		</div>
	)
}
export default Form
