import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {

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
					<Image src="/brands.png" alt={'images of brands'} fill className={styles.brandImg} />
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image src="/hero.gif" alt={'hero image'} fill className={styles.heroImg} />
			</div>
		</div>
	);
}
