import bcrypt from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
	const saltRounds = 10;

	try {
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(password, salt);

		return hashedPassword;
	} catch (error) {
		console.error("Error hashing password:", error);
		throw new Error("Failed to hash password");
	}
}