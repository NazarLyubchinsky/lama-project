import Image from "next/image";
// import styles from "./about.module.css";

export const metadata = {
	title: "About Page",
	description: "About description",
};


const AboutPage = () => {

	// console.log("lets check where it works")
	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">
			<div >
				<h2 className="sm:text-3xl text-2xl font-bold mb-5">About Agency</h2>
				<h1 >
					We create digital ideas that are bigger, bolder, braver and better.
				</h1>
				<p >
					We create digital ideas that are bigger, bolder, braver and better. We
					believe in good ideas flexibility and precission We’re world’s Our
					Special Team best consulting & finance solution provider. Wide range
					of web and software development services.
				</p>
				<div >
					<div >
						<h1>10 K+</h1>
						<p>Year of experience</p>
					</div>
					<div >
						<h1>10 K+</h1>
						<p>Year of experience</p>
					</div>
					<div >
						<h1>10 K+</h1>
						<p>Year of experience</p>
					</div>
				</div>
			</div>
			<div >
				<Image
					src="/about.png"
					alt="About Image"
					fill

				/>
			</div>
		</div>
	);
};

export default AboutPage;