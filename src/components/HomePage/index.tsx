import Image from "next/image"
import Link from "next/link"
import styles from "./style.module.scss"

export const HomePage = ({ }) => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Creative Thoughts Agency.</h1>
				<p className={styles.desc}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
					blanditiis adipisci minima reiciendis a autem assumenda dolore.
				</p>
				<div className={styles.buttons}>
					<Link className={styles.button} href="/about">Learn More
					</Link>
					<Link className={styles.button} href="/contact">Contact</Link>
				</div>
				<div className={styles.brands}>
					<Image src="/brands.png" alt={'images of brands'} fill sizes="(max-width: 1200px) 50vw, 100vw" className={styles.brandImg} />
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image src="/hero.gif" alt={'hero image'} fill sizes="(max-width: 1200px) 50vw, 100vw" priority className={styles.heroImg} />
			</div>
		</div>
	)
}
