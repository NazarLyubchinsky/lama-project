"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
	const { title, desc, slug, userId, img } = Object.fromEntries(formData);

	try {
		connectToDb();
		const newPost = new Post({
			title,
			desc,
			slug,
			userId,
			img
		});

		await newPost.save();
		console.log("saved to db");
		revalidatePath("/blog");
		revalidatePath("/admin");
	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
};

export const deletePost = async (formData) => {
	const { id } = Object.fromEntries(formData);
	try {
		connectToDb();

		await Post.findByIdAndDelete(id);
		console.log("deleted from db");
		revalidatePath("/blog");
		revalidatePath("/admin");
	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
};

export const addUser = async (prevState, formData) => {
	const { username, email, password, img, isAdmin } = Object.fromEntries(formData);

	try {
		connectToDb();
		const newUser = new User({
			username,
			email,
			password,
			img,
			isAdmin,
		});

		await newUser.save();
		console.log("saved to db");
		revalidatePath("/admin");
	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
};

export const deleteUser = async (formData) => {
	const { id } = Object.fromEntries(formData);
	try {
		connectToDb();

		await Post.deleteMany({ userId: id });
		await User.findByIdAndDelete(id);
		console.log("deleted from db");
		revalidatePath("/admin");
	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
};

export const editUser = async (prevState, formData) => {
	const { username, email, id, phone, } = Object.fromEntries(formData);
	const formattedPhoneNumber = phone.replace(/[-_]/g, '');

	try {
		connectToDb();
		const userToEdit = await User.findById(id);
		userToEdit.username = username;
		userToEdit.email = email;
		userToEdit.phone = formattedPhoneNumber;
		await userToEdit.save();
		revalidatePath("/profile");

		return { success: "User updated successfully" };
	} catch (err) {
		console.log(Object.values(err.errors).map(error => error))
		if (err.name === 'ValidationError') {
			const validationErrors = Object.values(err.errors).map(error => error.message);
			return { error: validationErrors.join(', ') };
		} else {
			return { error: 'Something went wrong!' };
		}
	}
};
export const editUserPassword = async (prevState, formData) => {
	const { password, passwordRepeat, id } = Object.fromEntries(formData);
	if (!password || !passwordRepeat) {
		return { error: "All fields are required" };
	}
	if (password.length < 6) {
		return { error: "Password must be at least 6 characters long" };
	}
	if (password !== passwordRepeat) {
		return { error: "Passwords do not match" };
	}

	try {
		connectToDb();
		const userToEditPassword = await User.findById(id);
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		userToEditPassword.password = hashedPassword;
		await userToEditPassword.save();
		revalidatePath("/profile");
		return { success: "Password updated successfully" };
	} catch (err) {
		console.log(err)
		// console.log(Object.values(err.errors).map(error => error))
		if (err.name === 'ValidationError') {
			const validationErrors = Object.values(err.errors).map(error => error.message);
			return { error: validationErrors.join(', ') };
		} else {
			return { error: 'Something went wrong!' };
		}
	}
}



export const handleGithubLogin = async () => {
	"use server";
	await signIn("github");
};

export const handleLogout = async () => {
	"use server";
	await signOut();
};

export const register = async (previousState, formData) => {
	const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);
	const phone = '';
	if (password !== passwordRepeat) {
		return { error: "Passwords do not match" };
	}

	try {
		connectToDb();

		const user = await User.findOne({ username });

		if (user) {
			return { error: "Username already exists" };
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			img,
			phone
		});
		console.log(newUser)
		await newUser.save();
		console.log("saved to db");

		return { success: true };
	} catch (err) {
		console.log(err);
		return { error: "Something went wrong!" };
	}
};

export const login = async (prevState, formData) => {
	const { username, password } = Object.fromEntries(formData);

	try {
		await signIn("credentials", { username, password });
	} catch (err) {
		console.log(err);
		if (err.type === "CredentialsSignin") {
			return { error: "Invalid username or password" };
		}
		throw err;
	}
};