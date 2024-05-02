"use client";
import type { Session } from "next-auth"
import { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import NavLink from "./NavLink/NavLink";

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

const Links = ({ session }: { session: Session | null }) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
		open ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
	};

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavLink item={link} key={link.title} />
				))}
				{session?.user && <NavLink item={{ title: "Profile", path: "/profile" }} />}
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
				alt={"menu burger"}
				width={30}
				height={30}
				onClick={handleClick}
			/>
			{open && (
				<>
					<div className={styles.modalOverlay} onClick={handleClick} >
					</div>
					<div className={styles.mobileLinks}>
						{links.map((link) => (
							<NavLink item={link} key={link.title} onClick={handleClick} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Links;