import { useState, useRef } from "react";
import Papa from "papaparse";
import { PaperClipIcon } from "@heroicons/react/24/solid";

const CSVUploader = ({ onUpload }) => {
	const [file, setFile] = useState(null);
	const fileInputRef = useRef(null);

	const handleFileUpload = (e) => {
		const selectedFile = e.target.files[0];
		setFile(selectedFile);
		Papa.parse(selectedFile, {
			complete: (result) => {
				onUpload(result.data);
			},
			header: true,
		});
	};

	return (
		<div className="mt-6">
			<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer" onClick={() => fileInputRef.current.click()}>
				<div className="text-center">
					<PaperClipIcon aria-hidden="true" className="mx-auto size-8 text-gray-300" />
					<div className="flex items-center justify-center text-sm/6 text-gray-600 mt-4">
						<input className="hidden" ref={fileInputRef} type="file" accept=".csv" onChange={handleFileUpload} />
						<h2 className="text-sm font-semibold text-center text-indigo-900 cursor-pointer" onClick={() => fileInputRef.current.click()}>
							{file ? file.name : "no file selected"}
						</h2>
					</div>
					<p className="text-xs/5 text-gray-600">CSV up to 10MB</p>
				</div>
			</div>
		</div>
	);
};

export default CSVUploader;
