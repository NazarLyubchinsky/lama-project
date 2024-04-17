"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";

interface NavLinkProps {
	item: {
		title: string;
		path: string;
	};
	onClick?: () => void;
}

const NavLink = ({ item, onClick }: NavLinkProps) => {
	const pathName = usePathname();
	return (
		<Link
			onClick={onClick}
			href={item.path}
			className={`${styles.container} ${pathName === item.path && styles.active
				}`}
		>
			{item.title}
		</Link>
	);
};

export default NavLink;