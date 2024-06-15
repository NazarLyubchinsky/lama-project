import { postProps } from "@/lib/models";

export const getDataPosts = async (): Promise<postProps[]> => {
	const res = await fetch(`${process.env.GET_DATA_URL}/blog`, { next: { revalidate: 3600 } });
	// const res = await fetch(`${process.env.GET_DATA_URL}/blog`, { cache: 'no-cache' });


	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};

