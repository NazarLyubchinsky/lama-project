import { auth } from '@/lib/auth';
import { getDataUser } from '@/utils/getData/getDataUser';
import React from 'react'
import styles from './style.module.scss'

import { UserAvatar } from '@/components/UserAvatar/UserAvatar';
import Form from './form/form';
import { ContextProvider } from '@/context/ContextProvider';
import FileUploadForm from '@/components/FileUploadForm/FileUploadForm';
const ProfilePage = async () => {
	const session = await auth();
	const user = await getDataUser(session?.user.email as string);
	return (
		<ContextProvider>
			<div className={styles.content}>
				<div className={styles.profile}>
					<UserAvatar img={user.img} width={150} height={150} />
					<FileUploadForm user={user} />
					<h4 className={styles.username}>{user.username}</h4>
				</div>
				<Form user={user} />
			</div>
		</ContextProvider>

	)
}
export default ProfilePage