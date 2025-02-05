// components/Navbar.js
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="bg-maroon/80 backdrop-blur-sm border-b border-[#DAA520]/20 shadow-lg">
			<nav className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<Link href="/">
							<h1 className="flex text-[#DAA520] text-2xl font-bold tracking-tight">
								<Image
									src="assets/icons/dev/dev-xl.svg"
									height={35}
									width={35}
									alt="fire giphy"
									className="pb-2"
								/>{" "}
								&nbsp; <span className=" p-2">Assets Host</span>
								<Image
									src="assets\gif\anime\fire-burn-fabio-nikolaus.gif"
									height={33}
									width={33}
									alt="fire giphy"
									className="pb-2"
								/>
							</h1>
						</Link>
					</div>
				</div>
			</nav>{" "}
		</header>
	);
};

export default Navbar;
