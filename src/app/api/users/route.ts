import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
export const GET = async () => {
	noStore();
	try {
		connectToDb();

		const posts = await User.find();
		return NextResponse.json(posts);
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch user!");
	}
};

