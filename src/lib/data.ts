import { Post, User, postProps, userProps } from "./models";
import { unstable_noStore as noStore } from "next/cache";
import { connectToDb } from "./utils";
export const getPosts = async (): Promise<postProps[]> => {
	try {
		connectToDb();
		const posts = await Post.find();
		return posts;
	}
	catch (err) {
		console.log(err);
		throw new Error("Failed to fetch posts!");
	}
};

export const getPost = async (slug: string): Promise<postProps> => {
	try {
		connectToDb();
		const post = await Post.findOne({ slug });
		return post;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch post!");
	}
};

export const getUser = async (id: string): Promise<userProps> => {
	noStore();
	try {
		connectToDb();
		const user = await User.findById(id);
		return user;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch user!");
	}
};

export const getUsers = async (): Promise<userProps[]> => {
	try {
		connectToDb();
		const users = await User.find();
		return users;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch users!");
	}
};