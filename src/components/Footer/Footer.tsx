import styles from "./style.module.scss";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>Footer</div>
			<div className={styles.text}>
				Nazar Lyubchinskyi creative thoughts agency © All rights reserved.
			</div>
		</div>
	);
};

export default Footer;