import React from "react";
import "./globals.css";

export const metadata = {
	title: "Assets Host",
	description: "A hub for all creative assets!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body className="bg-gray-100 text-gray-900">{children}</body>
		</html>
	);
}
