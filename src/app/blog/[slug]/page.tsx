import Image from "next/image";
import styles from "./style.module.scss";
import PostUser from "@/components/PostUser/postUser";
import { getDataPost } from "@/utils/getData/getDataPost";
import { formatDate } from "@/utils/formatDate";


interface BlogCardProps {
	params: {
		slug: string;
	}
}

export const generateMetadata = async ({ params }: BlogCardProps) => {
	const { slug } = params;

	const post = await getDataPost(slug);


	return {
		title: post.title,
		description: post.desc,
	};
};

const SinglePostPage = async ({ params }: BlogCardProps) => {
	const { slug } = params;

	const post = await getDataPost(slug);

	return (
		<div className={styles.container}>
			{post.img && (
				<div className={styles.imgContainer}>
					<Image src={post.img} alt={post.title} fill sizes="(max-width: 1200px) 50vw, 100vw" className={styles.img} />
				</div>
			)}
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.detail}>
					{post && (
						<PostUser userId={post.userId} />
					)}
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Published</span>
						<span className={styles.detailValue}>
							{formatDate(post.createdAt)}
						</span>
					</div>
				</div>
				<div className={styles.content}>{post.desc}</div>
			</div>
		</div>
	);
};

export default SinglePostPage;