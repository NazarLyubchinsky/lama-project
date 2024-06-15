import { Suspense } from "react";
import styles from "./style.module.scss";
import { auth } from "@/lib/auth";
import AdminPosts from "@/components/AdminPanel/AdminPosts/AdminPosts";
import AdminPostForm from "@/components/AdminPanel/AdminPostForm/AdminPostForm";
import AdminUsers from "@/components/AdminPanel/AdminUsers/AdminUsers";
import AdminUserForm from "@/components/AdminPanel/AdminUserForm/AdminUserForm";

const AdminPage = async () => {

	const session = await auth();
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.col}>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminPosts />
					</Suspense>
				</div>
				<div className={styles.col}>
					<AdminPostForm userId={session?.user.email as string} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminUsers />
					</Suspense>
				</div>
				<div className={styles.col}>
					<AdminUserForm />
				</div>
			</div>
		</div>
	);
};

export default AdminPage;