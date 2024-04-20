"use client";

import styles from "./style.module.scss";
import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";
import { useFormReset } from "@/hooks/useFormReset";
interface AdminUserFormData {
	username: string;
	email: string;
	password: string;
	img: string;
	isAdmin: boolean;
	error: string;
}
const initialState: AdminUserFormData = {
	username: "",
	email: "",
	error: "",
	password: "",
	isAdmin: false,
	img: "",
}
const AdminUserForm = () => {
	const [state, formAction] = useFormState(addUser, initialState);

	const formRefReset = useFormReset(state);
	return (
		<form ref={formRefReset} action={formAction} className={styles.container}>
			<h1>Add New User</h1>
			<input type="text" name="username" placeholder="username" />
			<input type="text" name="email" placeholder="email" />
			<input type="password" name="password" placeholder="password" />
			<input type="text" name="img" placeholder="img" />
			<select name="isAdmin">
				<option value="false">Is Admin?</option>
				<option value="false">No</option>
				<option value="true">Yes</option>
			</select>
			<button>Add</button>
			{state?.error}
		</form>
	);
};

export default AdminUserForm;