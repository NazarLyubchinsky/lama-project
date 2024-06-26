import Image from "next/image"
import styles from "./style.module.scss"
import Link from "next/link"
import { postProps } from "@/lib/models"
import { formatDate } from "@/utils/formatDate"

interface PostCardProps {
	post: postProps
}
const PostCard = ({ post }: PostCardProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{
					<div className={styles.imgContainer}>
						<Image src={post.img ? post.img : '/300x400.svg'} alt={post.title} loading="lazy" fill sizes="(max-width: 1200px) 50vw, 100vw" className={styles.img} />
					</div>
				}
				<span className={styles.date}>
					{formatDate(post.createdAt)}
				</span>
			</div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>{post.title}</h1>
				<Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
			</div>
		</div>
	)
}

export default PostCard