import { postProps } from "@/lib/models";

export const getDataPost = async (slug: string): Promise<postProps> => {
	const res = await fetch(`${process.env.GET_DATA_URL}/blog/${slug}`);

	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};