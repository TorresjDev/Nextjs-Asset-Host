import React from "react";
import ImgCard from "./ImgCard";

const AssetSection = ({ fileObj, onCopy }) => {
	let category = fileObj[0];
	let dataObj = fileObj[1];

	return (
		<section className="mb-16 px-4">
			<h2 className="text-3xl font-semibold mb-8 capitalize text-center text-[#DAA520]/80">
				{category}
			</h2>
			<div className="grid gap-10">
				{Object.entries(dataObj).map(([subCategory, fileData], index) => {
					if (Object.keys(fileData).length > 0) {
						return (
							<div key={`${index + 1}: ${subCategory}`} className="space-y-6">
								<h3 className="text-2xl font-semibold capitalize text-[#C0C0C0]/90">
									{subCategory}
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
									{Object.entries(fileData).map(
										([childFileKey, childFileData], childIndex) => {
											return (
												<ImgCard
													key={`${childIndex + 1}: ${childFileKey}`}
													file={childFileData}
													onCopy={onCopy}
												/>
											);
										}
									)}
								</div>
							</div>
						);
					}
					return null;
				})}
			</div>
		</section>
	);
};

export default AssetSection;
