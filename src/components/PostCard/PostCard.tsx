import Image from "next/image"
import styles from "./style.module.scss"
import Link from "next/link"
import { postProps } from "@/lib/models"

interface PostCardProps {
	post: postProps
}
const PostCard = ({ post }: PostCardProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{post.img && <div className={styles.imgContainer}>
					<Image src={post.img} alt={post.title} fill className={styles.img} />
				</div>}
				<span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
			</div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>{post.title}</h1>
				<Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
			</div>
		</div>
	)
}

export default PostCard