"use client"

import { addPost } from "@/lib/action";
import styles from "./style.module.scss";
import { useFormState, useFormStatus } from "react-dom";
import { Session } from "next-auth";
import { useFormReset } from "@/hooks/useFormReset";
import Preloader from "../Preloader/Preloader";
import { Suspense } from "react";
interface AdminPostFormProps {
	userId: Session["user"]["id"];
}
interface AdminPostFormData {
	userId: string;
	title: string;
	slug: string;
	img: string;
	desc: string;
	error: string;
}
const initialState: AdminPostFormData = { userId: '', title: '', error: '', slug: '', img: '', desc: '' };
const AdminPostForm = ({ userId }: AdminPostFormProps) => {
	const [state, formAction] = useFormState(addPost, initialState);
	const status = useFormStatus();
	const formRefReset = useFormReset(state);
	return (
		<form ref={formRefReset} action={formAction} className={styles.container}>
			<h1>Add New Post</h1>
			<input type="hidden" name="userId" value={userId} />
			<input type="text" name="title" placeholder="Title" />
			<input type="text" name="slug" placeholder="slug" />
			<input type="text" name="img" placeholder="img" />
			<textarea name="desc" placeholder="desc" rows={10} />
			<button >Add</button>
			{state?.error}
		</form >
	);
};

export default AdminPostForm;