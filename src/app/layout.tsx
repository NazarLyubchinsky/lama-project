import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lama Project",
	description: "Lama main project",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
