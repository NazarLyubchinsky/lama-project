import RegisterForm from "@/components/RegisterForm/RegisterForm";
import styles from "./style.module.scss";

const RegisterPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<RegisterForm />
			</div>
		</div>
	);
};

export default RegisterPage;