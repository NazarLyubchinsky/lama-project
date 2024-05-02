// import { auth } from '@/lib/auth';
// import { getDataUser } from '@/utils/getData/getDataUser';
// import Image from 'next/image';
// import React from 'react'
// import styles from './style.module.scss'
// import Link from 'next/link';
// import PostUser from '@/components/PostUser/postUser';
// import { UserAvatar } from '@/components/UserAvatar/UserAvatar';

// const ProfilePage = async () => {
// 	const session = await auth();
// 	const user = await getDataUser(session?.user.id as string);
// 	console.log(user)
// 	return (
// <div className={styles.container}>
// 	<div className={styles.profile}>
// 		<UserAvatar img={user.img} width={150} height={150} />
// 		<h4 className={styles.username}>{user.username}</h4>
// 	</div>
// 			<div className={styles.formContainer}>
// 				<form action="" className={styles.form}>
// 					<p className={styles.formText}>{user.username}</p>
// 					<p className={styles.formText}>{user.createdAt}</p>
// 					<p className={styles.formText}>{user.email}</p>
// 				</form>
// 			</div>

// 			{/* <div className={styles.formContainer}>
// 				<form action="" className={styles.form}>
// 					<input type="text" placeholder="Name and Surname" />
// 					<input type="text" placeholder="Email Address" />
// 					<input type="text" placeholder="Phone Number (Optional)" />
// 					<textarea
// 						name=""
// 						id=""
// 						placeholder="Message"
// 					></textarea>
// 					<button>Send</button>
// 				</form>
// 			</div> */}
// 		</div>
// 	)
// }
// export default ProfilePage
import { auth } from '@/lib/auth';
import { getDataUser } from '@/utils/getData/getDataUser';
// import Image from 'next/image';
import React from 'react'
import styles from './style.module.scss'
// import Link from 'next/link';
// import PostUser from '@/components/PostUser/postUser';
import { UserAvatar } from '@/components/UserAvatar/UserAvatar';
import Form from './form/form';
import { ContextProvider } from '@/context/ContextProvider';
// import { postProps } from '@/lib/models';

const ProfilePage = async () => {
	const session = await auth();
	const user = await getDataUser(session?.user.id as string);
	return (
		<ContextProvider>
			<div className={styles.container}>
				<div className={styles.profile}>
					<UserAvatar img={user.img} width={150} height={150} />
					<h4 className={styles.username}>{user.username}</h4>
				</div>
				<Form user={user} />
			</div>
		</ContextProvider>

	)
}
export default ProfilePage