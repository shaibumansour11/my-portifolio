import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full aspect-square">
						<div className="absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{ opacity: 1, scale: 1, x: 0 }}
								className="w-full h-full">
								<Image
									src={Me1}
									alt="John Maliwa"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: -100 }}
								whileInView={{ opacity: 1, scale: 1, x: 0 }}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me2}
									alt="John Maliwa"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: -100 }}
								whileInView={{ opacity: 1, scale: 1, x: 0 }}
								transition={{ delay: 0.5 }}
								className="w-full h-full">
								<Image
									src={Me3}
									alt="John Maliwa"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>

				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{ opacity: 0, x: 200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, type: "spring" }}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						John Maliwa
					</h2>
					<p className="text-gray-600 text-justify title text-lg">
						👋 Hey! I&rsquo;m <span className="text-black font-medium">John Maliwa</span>, an
						<span className="text-black font-medium">
							{" "}
							Industrial & Mechanical Engineer 🔧
						</span>{" "}
						with a strong passion for
						<span className="text-black font-medium">
							{" "}
							full-stack development 💻
						</span>{" "}
						and
						<span className="text-black font-medium">
							{" "}
							mechanical & product design using SolidWorks 🛠️.
						</span>{" "}
						I enjoy blending engineering principles with modern software
						technologies to build efficient, scalable, and real-world solutions.
						<br />
						<br />
						I&rsquo;m also a <span className="text-black font-medium">Co-Founder at Disihub Tech 🚀</span>,
						where we focus on innovation, digital product design, and web & app
						development. From designing mechanical systems to crafting clean
						user interfaces and backend architectures, I thrive at the
						intersection of
						<span className="text-black font-medium">
							{" "}
							engineering, design, and technology.
						</span>{" "}
						<br />
						<br />
						In today&rsquo;s fast-evolving tech landscape 🌍, I believe in being a
						<span className="text-black font-medium">
							{" "}
							lifelong learner 📚
						</span>{" "}
						and continuously pushing boundaries. Let&rsquo;s connect and build
						impactful solutions together!
					</p>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
