const fs = require('fs');
const path = require('path');

// Define the original assets directory.
const ASSETS_DIR = path.join(__dirname, '../public/assets');

// Define the output file for metadata.
const OUTPUT_FILE = path.join(__dirname, '../app/lib/metadata.ts');

/**
 * Function: generateMetadata
 * --------------------------
 * Recursively generates metadata for all files in the given directory.
 *
 * @param {string} dir - The directory to scan.
 * @param {string} basePath - The base path for file references in metadata.
 * @returns {Array} - Metadata array containing file details.
 */
function generateMetadata(dir, basePath = '') {
  const files = fs.readdirSync(dir); // Read directory contents.
  const metadata = []; // Initialize metadata array.

  files.forEach((file) => {
    const fullPath = path.join(dir, file); // Full file path.
    const relativePath = path.join(basePath, file); // Relative path for metadata.

    if (fs.statSync(fullPath).isDirectory()) {
      // If it's a directory, recursively collect metadata.
      metadata.push(...generateMetadata(fullPath, relativePath));
    } else {
      // If it's a file, add its metadata.
      metadata.push({
        name: file, // File name.
        path: `/assets/${relativePath.replace(/\\/g, '/')}`, // File path in the assets folder.
        type: path.extname(file).slice(1), // File extension (e.g., 'png').
      });
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
