"use client";
import React from "react";
import { handleCopyUrl } from "../lib/utils";
import { metadata } from "./lib/metadata";
import AssetSection from "../components/AssetSection";

export default function Home() {
	return (
		<main className="p-8">
			<header className="text-center mb-8">
				<h1 className="text-4xl font-bold">Assets Host 🎨</h1>
				<p className="text-lg mt-2">
					Explore a curated library of images, icons, and multimedia files
					categorized for ease of use. Select a category below to browse.
				</p>
			</header>

			{Object.entries(metadata).map((dataObj, index) => {
				console.log({ dataObj });

				return (
					<AssetSection
						key={index + 1}
						fileObj={dataObj}
						onCopy={handleCopyUrl}
					/>
				);
			})}
		</main>
	);
}
