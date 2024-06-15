

import { userProps } from "@/lib/models";

export const getDataUser = async (slug: string): Promise<userProps> => {
	const res = await fetch(`${process.env.GET_DATA_URL}/users/${slug}`, { next: { revalidate: 60 } });
	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};

