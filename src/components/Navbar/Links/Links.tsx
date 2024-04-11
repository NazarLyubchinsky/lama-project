"use client";

import { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import NavLink from "./NavLink/NavLink";
import { handleLogout } from "@/lib/action";


const links = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Contact",
		path: "/contact",
	},
	{
		title: "Blog",
		path: "/blog",
	},
];

interface LinksProps {
	session: {
		user: {
			name: string
			email: string
			image: string
			isAdmin?: boolean
		}
		expires: '2024-05-11T15:28:22.139Z'
	}
}
const Links = ({ session }: LinksProps) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavLink item={link} key={link.title} />
				))}
				{session?.user ? (
					<>
						{session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
						<form action={handleLogout}>
							<button className={styles.logout}>Logout</button>
						</form>
					</>
				) : (
					<NavLink item={{ title: "Login", path: "/login" }} />
				)}
			</div>
			<Image
				className={styles.menuButton}
				src="/menu.png"
				alt=""
				width={30}
				height={30}
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLink item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;