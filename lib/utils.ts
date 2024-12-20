import { Subcategories, File } from "./types";

export const groupAssetsByCategory = (metadata: File[]): { [key: string]: Subcategories } => {
   const grouped: { [key: string]: Subcategories } = {};
   metadata.forEach((file) => {
     const [mainCategory, subCategory] = file.path.split("/").slice(2, 4); // Extract folder names
     if (!grouped[mainCategory]) grouped[mainCategory] = {};
     if (!grouped[mainCategory][subCategory]) grouped[mainCategory][subCategory] = [];
     grouped[mainCategory][subCategory].push(file);
   });
   return grouped;
 };
 
 
 export const handleCopyUrl = (path) => {
   const fullUrl = `${window.location.origin}${path}`; // Construct the full URL
   navigator.clipboard.writeText(fullUrl)
     .then(() => alert("URL copied to clipboard!"))
     .catch((err) => console.error("Failed to copy URL: ", err)); // Error handling
 };
 