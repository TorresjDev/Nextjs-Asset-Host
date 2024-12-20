"use client";

import React from "react";
import { groupAssetsByCategory, handleCopyUrl } from "../lib/utils";
import { metadata } from "./lib/metadata";
import AssetSection from "../components/AssetSection";

export default function Home() {
	// Group assets by category and subcategories
	const groupedAssets = groupAssetsByCategory(metadata);

	return (
		<main className="p-8">
			<header className="text-center mb-8">
				<h1 className="text-4xl font-bold">Assets Host 🎨</h1>
				<p className="text-lg mt-2">
					Explore a curated library of images, icons, and multimedia files
					categorized for ease of use. Select a category below to browse.
				</p>
			</header>

			{/* Render the AssetSection components dynamically */}
			{Object.entries(groupedAssets).map(([category, subcategories]) => (
				<AssetSection
					key={category}
					category={category}
					subcategories={subcategories}
					onCopy={handleCopyUrl}
				/>
			))}
		</main>
	);
}
