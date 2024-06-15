import styles from "./style.module.scss";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import { getDataPosts } from "@/utils/getData/getDataPosts";

const AdminPosts = async () => {
	const posts = await getDataPosts();
	return (
		<div className={styles.container}>
			<h1>Posts</h1>
			{posts.map((post) => (
				<div className={styles.post} key={post._id}>
					<div className={styles.detail}>
						<Image
							src={post.img || "/noavatar.png"}
							alt=""
							width={50}
							height={50}
						/>
						<span className={styles.postTitle}>{post.title}</span>
					</div>
					<form action={deletePost}>
						<input type="hidden" name="id" value={post._id} />
						<button className={styles.postButton}>Delete</button>
					</form>
				</div>
			))}
		</div>
	);
};

export default AdminPosts;