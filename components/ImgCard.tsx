import Image from "next/image";
import { blackBgFiles } from "../public/data";

const ImgCard = ({ file, onCopy }) => {
	return (
		<div className="bg-white shadow-xl rounded p-4 text-center border border-stone-600 max-w-xs mx-auto">
			<div className="w-36 h-36 mx-auto relative">
				<Image
					src={file.path}
					alt={file.name}
					fill={true}
					loading="lazy"
					className={`${
						blackBgFiles.includes(file.name) ? "bg-black" : ""
					} rounded`}
				/>
			</div>

			<div className="p-4 flex flex-col items-center">
				<p className="text-gray-800 text-sm font-medium truncate mb-3">
					{file.name}
				</p>
				<div className="flex gap-2">
					{/* Copy URL Button */}
					<button
						className="bg-gray-600 text-white text-xs py-1.5 px-4 rounded-md hover:bg-gray-800 transition-all flex items-center gap-2"
						onClick={() => onCopy(file.path)}
					>
						<span>🔗</span> Copy
					</button>
					{/* Download Button */}
					<a
						href={file.path}
						download={file.name}
						className="bg-blue-600 text-white text-xs py-1.5 px-4 rounded-md hover:bg-blue-700 transition-all flex items-center gap-2"
					>
						<span>⬇️</span> Download
					</a>
				</div>
			</div>
		</div>
	);
};

export default ImgCard;
