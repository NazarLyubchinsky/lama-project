import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export const GET = async (request) => {
	noStore();
	try {
		connectToDb();

		const posts = await Post.find();
		return NextResponse.json(posts);
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch posts!");
	}
};

