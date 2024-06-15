import NextAuth, { type DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User, userProps } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { hashPassword } from "@/utils/hashPassword";

type CredentialsProps = {
	email: string;
	password: string;
}
declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			isAdmin?: string | null
		} & DefaultSession["user"] // To keep the default types
	}
}

const login = async (credentials: CredentialsProps): Promise<userProps> => {
	console.log(credentials.password)
	try {
		connectToDb();
		const user = await User.findOne({ email: credentials.email });
		console.log(user)
		console.log(user.password)
		if (!user) throw new Error("Wrong credentials!");
	
		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password,
		);
	
		console.log(isPasswordCorrect)

		if (!isPasswordCorrect) throw new Error("Wrong credentials!");

		return user;
	} catch (err) {
		console.log(err);
		throw new Error("Failed to login!");
	}
};

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	providers: [
		GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			async authorize(credentials: Partial<CredentialsProps>) {
				try {
					if (credentials.email === undefined) {
						throw new Error("Username is required");
					}
					const user = await login(credentials as CredentialsProps);
					return user;
				} catch (err) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			const hashedPassword = await hashPassword('s0/\/\P4$$w0rD')
			
			if (account && account.provider === "github") {
				connectToDb();
				try {
					const user = await User.findOne({ email: profile?.email });
					if (!user) {
						const newUser = new User({
							username: profile?.login,
							email: profile?.email,
							img: profile?.avatar_url,
							password: hashedPassword
						});

						await newUser.save();
					}
				} catch (err) {
					console.log(err);
					return false;
				}
			}
			return true;
		},
		...authConfig.callbacks,
	},
});

