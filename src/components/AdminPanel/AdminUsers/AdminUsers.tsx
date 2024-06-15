import styles from "./style.module.scss";
import Image from "next/image";
import { deleteUser } from "@/lib/action";
import { getDataUsers } from "@/utils/getData/getDataUsers";

const AdminUsers = async () => {
	const users = await getDataUsers();
	return (
		<div className={styles.container}>
			<h1>Users</h1>
			{users.map((user) => (
				<div className={styles.user} key={user._id}>
					<div className={styles.detail}>
						<Image
							src={user.img || "/noavatar.png"}
							alt=""
							width={50}
							height={50}
						/>
						<span>{user.username}</span>
					</div>
					<form action={deleteUser}>
						<input type="hidden" name="id" value={user._id} />
						<input type="hidden" name="email" value={user.email} />
						<button className={styles.userButton}>Delete</button>
					</form>
				</div>
			))}
		</div>
	);
};

export default AdminUsers;