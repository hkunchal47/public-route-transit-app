import React from 'react';

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    onFileUpload(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploader;
