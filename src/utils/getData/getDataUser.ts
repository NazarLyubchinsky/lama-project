import { postProps } from "@/lib/models";

export const getDataUser = async (id: string): Promise<postProps> => {
	// const res = await fetch(`${process.env.GET_DATA_URL}/users/${id}`, { next: { revalidate: 3600 } });
	const res = await fetch(`${process.env.GET_DATA_URL}/users/${id}`);

	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};