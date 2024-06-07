import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
interface IParams {
	params: { id: string };
}

export const GET = async (request: NextApiRequest, { params }: IParams) => {
	const { id } = params;
	noStore();
	connectToDb();

	const user = await User.findById(id);
	try {
		connectToDb();

		const user = await User.findById(id);

		return NextResponse.json(user);
	} catch (err) {
		console.log(err);
		throw new Error("Failed to fetch user!");
	}
};
