const fs = require("fs");
const path = require("path");

// Define the original assets directory.
const ASSETS_DIR = path.join(__dirname, "../public/assets");

// Define the output file for metadata.
const OUTPUT_FILE = path.join(__dirname, "../app/lib/metadata.ts");

// Define the basePath for GitHub Pages.
const BASE_PATH = "/Nextjs-Asset-Host"; // Replace with your repository name.

/**
 * Function: generateMetadata
 * --------------------------
 * Recursively generates metadata for all files in the given directory.
 *
 * @param {string} dir - The directory to scan.
 * @param {string} basePath - The base path for file references in metadata.
 * @returns {Array} - Metadata array containing file details.
 */
function generateMetadata(dir, basePath = "") {
	const files = fs.readdirSync(dir); // Read directory contents.
	const metadata = {};

	files.forEach((file) => {
		const fullPath = path.join(dir, file); // Full file path.
		const relativePath = path.join(basePath, file); // Relative path for metadata.

		if (fs.statSync(fullPath).isDirectory()) {
			// If it's a directory, recursively collect metadata.
			metadata[file] = generateMetadata(fullPath, relativePath);
			metadata[file] = generateMetadata(fullPath, relativePath);
		} else {
			// If it's a file, add its metadata with the basePath.
			metadata[file] = {
				name: file,
				path: `${BASE_PATH}/assets/${relativePath.replace(/\\/g, "/")}`,
				type: path.extname(file).slice(1),
			};
			metadata[file] = {
				name: file,
				path: `${BASE_PATH}/assets/${relativePath.replace(/\\/g, "/")}`,
				type: path.extname(file).slice(1),
			};
		}
	});

	return metadata; // Return collected metadata.
}

// Generate metadata and write to the output file.
const metadata = generateMetadata(ASSETS_DIR);
fs.writeFileSync(
	OUTPUT_FILE,
	`export const metadata = ${JSON.stringify(metadata, null, 2)};`
);
console.log(`Metadata generated at: ${OUTPUT_FILE}`);
