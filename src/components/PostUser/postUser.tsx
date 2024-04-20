import styles from "./style.module.scss";
import Image from "next/image";
import { getDataUser } from "@/utils/getData/getDataUser";



const PostUser = async ({ userId }: { userId: string }) => {
	const user = await getDataUser(userId);
	return (
		<div className={styles.container}>
			<Image
				className={styles.avatar}
				src={user && user.img ? user.img : "/noavatar.png"}
				alt={'user avatar'}
				width={50}
				height={50}
			/>
			<div className={styles.texts}>
				<span className={styles.title}>Author</span>
				<span className={styles.username}>{user && user.username}</span>
			</div>
		</div>
	);
};

export default PostUser;