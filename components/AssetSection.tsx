import React from "react";
import ImgCard from "./ImgCard";
import { AssetSectionProps } from "../lib/types";
 
const AssetSection: React.FC<AssetSectionProps> = ({ category, subcategories, onCopy }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 capitalize">{category}</h2>
      {Object.entries(subcategories).map(([subCategory, files]) => (
        <div key={subCategory} className="mb-8">
          <h3 className="text-2xl font-medium mb-2 capitalize">{subCategory}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 md:gap-3 3xl:gap-1">
            {files.map((file, index) => (
              <ImgCard key={index} file={file} onCopy={onCopy} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}


export default AssetSection;