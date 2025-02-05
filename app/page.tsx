"use client";
import React from "react";
import { handleCopyUrl } from "../lib/utils";
import { metadata } from "./lib/metadata";
import AssetSection from "../components/AssetSection";

export default function Home() {
	return (
		<div className="p-8">
			<header className="text-center mb-8">
				<h3 className="text-lg mt-2 text-[#DAA520]">
					Explore a curated library of images, icons, and multimedia files
					categorized for ease of use. Select a category below to browse.
				</h3>
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
		</div>
	);
}
