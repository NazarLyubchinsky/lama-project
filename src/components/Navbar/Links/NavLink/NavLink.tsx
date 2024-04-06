"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";

interface NavLinkProps {
	item: {
		title: string;
		path: string;
	};
}

// const NavLink = ({ item }) => {
const NavLink = ({ item }: NavLinkProps) => {
	const pathName = usePathname();

	return (
		<Link
			href={item.path}
			className={`${styles.container} ${pathName === item.path && styles.active
				}`}
		>
			{item.title}
		</Link>
	);
};

export default NavLink;