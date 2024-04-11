import Link from "next/link"
import styles from "./style.module.scss"
import Links from "./Links/Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {

	const session = await auth();
	console.log(session)
	return (
		<div className={styles.container}>
			<Link href="/" className={styles.logo}>Logo</Link>
			<div>
				<Links session={session} />
			</div>
		</div>
	)
}

export default Navbar