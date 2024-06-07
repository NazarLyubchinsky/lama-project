import mongoose from "mongoose";


export interface userProps {
	// slug: string
	_id: string
	isAdmin: boolean;
	password: string;
	id: string
	username: string
	email: string
	img?: string
	phone: string

}

export interface postProps {
	_id: string
	id: string
	username: string
	userId: string
	title: string
	desc: string
	img?: string
	slug: string
	email: string
	createdAt:  Date

}

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			minLength: 5,
			maxLength: 15
		},
		email: {
			type: String,
			required: true,
			unique: true,
			maxLength: 50,
			match: /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			unique: true,
			required: true,
			minLength: 5
		},
		img: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			default: false
		},
		phone: {
			type: String,
			// required: true,
			unique: true,
			minLength: 15,
		}

	}, {
	timestamps: true
}
);

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: {
			type: String,
		},
		userId: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
