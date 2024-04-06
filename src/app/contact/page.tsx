import Image from "next/image";
import styles from "./style.module.scss";


export const metadata = {
	title: "Contact Page",
	description: "Contact description",
};

const ContactPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src="/contact.png" alt="" fill className={styles.img} />
			</div>
			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
					<input type="text" placeholder="Name and Surname" />
					<input type="text" placeholder="Email Address" />
					<input type="text" placeholder="Phone Number (Optional)" />
					<textarea
						name=""
						id=""
						placeholder="Message"
					></textarea>
					<button>Send</button>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;