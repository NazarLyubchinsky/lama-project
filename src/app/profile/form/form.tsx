
// "use client"
// // import styles from './style.module.scss'
// import './style.scss'

// import { userProps } from '@/lib/models';
// import { editUser, editUserPassword } from '@/lib/action';

// import ProfileChange from './profileContent/ProfileChange';
// import ProfileInfoAbout from './profileContent/ProfileInfoPersonalData';
// import ProfileButton from './profileContent/ProfileButton';
// import { useFormState } from 'react-dom';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect, useState } from 'react';
// import ProfilePassword from './profileContent/ProfilePassword';
// import { useTodoContext } from '@/context/useTodoContext';

// interface PropsForm {
// 	user: userProps
// }
// const Form = ({ user }: PropsForm) => {
// 	const [stateUser, formAction] = useFormState(editUser, undefined);
// 	const [statePassword, formActionPassword] = useFormState(editUserPassword, undefined);
// 	const { userChange, setUserChange, setPasswordChange, passwordChange } = useTodoContext();

// 	console.log(stateUser)
// 	console.log(statePassword)

// 	useEffect(() => {
// 		// Handle success messages
// 		if (stateUser?.success) {
// 			toast.success(stateUser.success, {
// 				position: "bottom-right",
// 				// containerId: "updatedUser"
// 				containerId: 'A',
// 			});
// 			toast.dismiss('A')
// 		} else if (stateUser?.error) {
// 			toast.error(stateUser.error, {
// 				position: "bottom-right",
// 				containerId: 'A'
// 				// containerId: "updatedUser"
// 			});
// 			toast.dismiss('A')
// 		} else if (statePassword?.success) {
// 			toast.success(statePassword.success, {
// 				position: "bottom-right",
// 				// containerId: "updatedPassword"
// 				containerId: 'B'
// 			});
// 			toast.dismiss('B')
// 		} else if (statePassword?.error) {
// 			toast.success(statePassword.error, {
// 				position: "bottom-right",
// 				// containerId: "updatedPassword"
// 				containerId: 'B'
// 			});
// 			toast.dismiss('B')
// 		}
// 		// return () => {
// 		// toast.dismiss()
// 		// clear success messages
// 		// if (stateUser?.success) {
// 		// 	toast.dismiss("A");
// 		// } else if (stateUser?.error) {
// 		// 	toast.dismiss("A");
// 		// } else if (statePassword?.success) {
// 		// 	toast.dismiss("B");
// 		// } else if (statePassword?.error) {
// 		// 	toast.dismiss("B");
// 		// }
// 		// }
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [stateUser, statePassword]);

// 	return (
// 		<div>
// 			<form action={formAction} className="profile__content">
// 				<ProfileChange title={'Personal data'} onClick={() => setUserChange(!userChange)} change={userChange} />
// 				<ProfileInfoAbout user={user} />
// 				<ProfileButton change={userChange} />
// 				<ToastContainer containerId={'A'} />
// 				{/* <ToastContainer containerId={"updatedUser "} /> */}
// 			</form >
// 			<form action={formActionPassword} className="profile__content">
// 				<ProfileChange title={'Password'} onClick={() => setPasswordChange(!passwordChange)} change={passwordChange} />
// 				<ProfilePassword user={user} />
// 				<ProfileButton change={passwordChange} />
// 				<ToastContainer containerId={'B'} />
// 				{/* <ToastContainer containerId={"updatedPassword "} /> */}
// 			</form >
// 		</div>
// 	)
// }
// export default Form




"use client"
// import styles from './style.module.scss'
import './style.scss'

import { userProps } from '@/lib/models';
import { editUser, editUserPassword } from '@/lib/action';

import ProfileChange from './profileContent/ProfileChange';
import ProfileInfoAbout from './profileContent/ProfileInfoPersonalData';
import ProfileButton from './profileContent/ProfileButton';
import { useFormState } from 'react-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import ProfilePassword from './profileContent/ProfilePassword';
import { useTodoContext } from '@/context/useTodoContext';

interface PropsForm {
	user: userProps
}
const Form = ({ user }: PropsForm) => {
	const [stateUser, formAction] = useFormState(editUser, undefined);
	const [statePassword, formActionPassword] = useFormState(editUserPassword, undefined);
	const { userChange, setUserChange, setPasswordChange, passwordChange } = useTodoContext();

	console.log(stateUser)
	console.log(statePassword)
	// const dismissAll = () => toast.dismiss();

	useEffect(() => {
		if (stateUser?.success) {
			toast.success(stateUser.success, {
				position: "bottom-right",
				containerId: "updatedUser"
			});
		} else if (stateUser?.error) {
			toast.error(stateUser.error, {
				position: "bottom-right",
				containerId: "updatedUser"
			});
		}

	}, [stateUser]);

	useEffect(() => {
		if (statePassword?.success) {
			toast.success(statePassword.success, {
				position: "bottom-right",
				containerId: "updatedPassword"
			});
		} else if (statePassword?.error) {
			toast.error(statePassword.error, {
				position: "bottom-right",
				containerId: "updatedPassword"
			});
		}
	}, [statePassword])

	return (
		<div>
			<form action={formAction} className="profile__content">
				<ProfileChange title={'Personal data'} onClick={() => setUserChange(!userChange)} change={userChange} />
				<ProfileInfoAbout user={user} />
				<ProfileButton change={userChange} />
				<ToastContainer containerId={'updatedUser'} />
			</form >
			<form action={formActionPassword} className="profile__content">
				<ProfileChange title={'Password'} onClick={() => setPasswordChange(!passwordChange)} change={passwordChange} />
				<ProfilePassword user={user} />
				<ProfileButton change={passwordChange} />
				<ToastContainer containerId={'updatedPassword'} />
			</form >
		</div>
	)
}
export default Form
