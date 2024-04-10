import PostCard from "@/components/PostCard/PostCard";
import styles from "./style.module.scss";
import { getPosts } from "@/lib/data";


export const metadata = {
	title: "Blog Page",
	description: "Blog description",
};


const BlogPage = async () => {

	const posts = await getPosts();
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