import PostCard from "@/components/PostCard/PostCard";
import styles from "./style.module.scss";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {

	const posts = await getPosts();
	console.log(posts)
	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div className={styles.post} key={post.id}>
					<PostCard post={post} />
				</div>
			))}
		</div>
	);
};

export default BlogPage;