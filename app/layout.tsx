import React from "react";
import "./globals.css";

export const metadata = {
	title: "Assets Host",
	description: "A hub for all creative assets!",
	icons: "assets/icons/dev/dev-1.svg",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body className="bg-slate-50 text-zinc-950">{children}</body>
		</html>
	);
}
