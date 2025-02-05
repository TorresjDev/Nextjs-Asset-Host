import React from "react";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
	title: "Assets Host",
	description: "A hub for all creative assets!",
	icons: "assets/icons/dev/dev-xl.svg",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="gradient-background min-h-screen relative">
				<Navbar />
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
