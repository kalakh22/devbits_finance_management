import { useState } from "react";
import Papa from "papaparse";

const CSVUploader = ({ onUpload }) => {
  const [file, setFile] = useState(null);

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
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default CSVUploader;
