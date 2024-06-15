import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
interface IParams {
	params: { slug: string };
}
export const GET = async (request: Request, { params }: IParams) => {
	const { slug } = params;
	try {
		connectToDb();

		const post = await Post.findOne({ slug });
		return NextResponse.json(post);
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch post!");
	}
};
