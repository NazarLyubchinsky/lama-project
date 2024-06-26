import PostCard from "@/components/PostCard/PostCard";
import styles from "./style.module.scss";
import { getDataPosts } from "@/utils/getData/getDataPosts";


export const metadata = {
	title: "Blog Page",
	description: "Blog description",
};


const BlogPage = async () => {

	const posts = await getDataPosts();

	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div className={styles.post} key={post._id}>
					<PostCard post={post} />
				</div>
			)
			)}

		</div>
	);
};

export default BlogPage;