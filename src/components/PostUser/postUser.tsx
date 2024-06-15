import styles from "./style.module.scss";
import { getDataUser } from "@/utils/getData/getDataUser";
import { UserAvatar } from "../UserAvatar/UserAvatar";



const PostUser = async ({ userId }: { userId: string }) => {
	const user = await getDataUser(userId);
	return (
		user && <div className={styles.container}>
			<UserAvatar img={user && user.img} />
			<div className={styles.texts}>
				<span className={styles.title}>Author</span>
				<span className={styles.username}>{user && user.username}</span>
			</div>
		</div>
	);
};

export default PostUser;