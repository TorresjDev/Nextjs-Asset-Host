 
 export const handleCopyUrl = (path) => {
   const fullUrl = `${window.location.origin}${path}`; // Construct the full URL
   navigator.clipboard.writeText(fullUrl)
     .then(() => alert("URL copied to clipboard!"))
     .catch((err) => console.error("Failed to copy URL: ", err)); // Error handling
 };
 