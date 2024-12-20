export type File = {
   name: string;
   path: string;
   type: string;
 };
 
 export type Subcategories = {
   [subCategory: string]: File[];
 };
 
 export type AssetSectionProps = {
   category: string;
   subcategories: Subcategories;
   onCopy: (path: string) => void;
 };