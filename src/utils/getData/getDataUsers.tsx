import { userProps } from "@/lib/models";

export const getDataUsers = async (): Promise<userProps[]> => {
	// const res = await fetch(`${process.env.GET_DATA_URL}/user`, { next: { revalidate: 3600 } });
	const res = await fetch(`${process.env.GET_DATA_URL}/users`, { next: { revalidate: 3600 } });
	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};
