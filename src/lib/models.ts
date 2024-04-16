import mongoose from "mongoose";


export interface userProps {
	id: string
	username: string
	email: string
	isAdmin: boolean
	password: string
	img?: string
}

export interface postProps {
	id: string
	userId: string
	title: string
	desc: string
	img?: string
	slug: string
	createdAt: Date

}

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 20
		},
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50
		},
		password: {
			type: String,
			// required: true,
			// min: 6
		},
		img: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			default: false
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

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 3,
//       max: 20,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       max: 50,
//     },
//     password: {
//       type: String,
//     },
//     img: {
//       type: String,
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// const postSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     desc: {
//       type: String,
//       required: true,
//     },
//     img: {
//       type: String,
//     },
//     userId: {
//       type: String,
//       required: true,
//     },
//     slug: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   },
//   { timestamps: true }
// );

// export const User = mongoose.models?.User || mongoose.model("User", userSchema);
// export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);