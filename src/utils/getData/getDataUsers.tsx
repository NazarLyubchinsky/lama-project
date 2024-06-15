import { userProps } from "@/lib/models";

export const getDataUsers = async (): Promise<userProps[]> => {
	const res = await fetch(`${process.env.GET_DATA_URL}/users`, { cache: 'no-cache' });
	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};
