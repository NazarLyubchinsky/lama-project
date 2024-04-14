import { handleGithubLogin } from "@/lib/action";
import styles from "./style.module.scss";
import LoginForm from "@/components/LoginForm/LoginForm";

const LoginPage = () => {

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<form action={handleGithubLogin}>
					<button className={styles.github}>Login with Github</button>
				</form>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;



// import { handleGithubLogin } from "@/lib/action";
// import { auth, signIn } from "@/lib/auth";
// import styles from "./style.module.scss";
// import LoginForm from "@/components/LoginForm/LoginForm";


// const LoginPage = async () => {

// 	const session = await auth();

// 	const handleGithubLogin = async () => {
// 		"use server";
// 		await signIn('github');
// 	}
// 	console.log('session', session);

// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.wrapper}>
// 				<form action={handleGithubLogin}>
// 					<button className={styles.github}>Login with Github</button>
// 				</form>
// 				{/* <LoginForm /> */}
// 			</div>
// 		</div>
// 	);
// };

// export default LoginPage;