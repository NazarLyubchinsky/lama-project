import styles from "./style.module.scss";
import Image from "next/image";
import { getDataUser } from "@/utils/getData/getDataUser";
import { UserAvatar } from "../UserAvatar/UserAvatar";



const PostUser = async ({ userId }: { userId: string }) => {
	const user = await getDataUser(userId);
	return (
		<div className={styles.container}>
			<UserAvatar img={user.img} />
			<div className={styles.texts}>
				<span className={styles.title}>Author</span>
				<span className={styles.username}>{user && user.username}</span>
			</div>
		</div>
	);
};

export default PostUser;