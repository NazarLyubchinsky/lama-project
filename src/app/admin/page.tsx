import { Suspense } from "react";
import styles from "./style.module.scss";
import { auth } from "@/lib/auth";
import AdminPosts from "@/components/AdminPosts/AdminPosts";
import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";
import AdminUsers from "@/components/AdminUsers/AdminUsers";
import AdminUserForm from "@/components/AdminUserForm/AdminUserForm";

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
					<AdminPostForm userId={session?.user.id} />
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