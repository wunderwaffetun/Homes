import React, { useState } from "react";
import "./FileUpload.css";

interface IFiles {
  files: File[],
  setFiles: (e: File[]) => void
}

function FileUpload({ files, setFiles } : IFiles) {
  // const [files, setFiles] = useState([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files: selectedFiles } = e.target;
    const newFiles = Array.from(selectedFiles!);
    setFiles([...files, ...newFiles]);
  };

  const handleFileRemove = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div className="center">
      <div className="file-upload hungreed margin" role="button">
        <label className="form-file">
          <label
            htmlFor="file-upload-input"
            className="file-upload-input normal center heightlyBlockObject border hungreedWithMArgin"
          >
            <ul className="file-list">
              {files.map((file, index) => (
                <li key={index} className="file-item">
                  <a
                    href="download/acme-doc-2.0.1.txt"
                    download="Acme Documentation (ver. 2.0.1).txt"
                  >
                    <img src={URL.createObjectURL(file)} alt={file.name}></img>
                  </a>

                  <button
                    className="file-remove"
                    onClick={() => handleFileRemove(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </label>
          <input
            className="file-upload-input" //input-file-btn
            id="file-upload-input"
            type="file"
            multiple
            onChange={(e) => handleFileUpload(e)}
          />
          <span className="input-file-text">Максимум 10мб</span>
        </label>
      </div>
    </div>
  );
}

export default FileUpload;
