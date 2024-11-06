import { useState } from 'react';
import { UploadSimple } from '@phosphor-icons/react';

function FileUpload() {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Set the file name to display
    }
  };

  return (
    <div>
      <div className="font-bold text-xl mt-8">Supporting Documentation (Optional)</div>
      <div className="mt-3">Please upload any supporting documentation here. (Government Documents, Bank Statements, Utility Bills)</div>

      <label 
        htmlFor="file-upload" 
        className="w-48 flex flex-row items-center bg-slate-100 rounded-lg px-4 py-2 my-4 border border-slate-400 hover:bg-slate-200 cursor-pointer"
      >
        <UploadSimple size={20} weight="light" />
        <div className="font-medium text-sm ml-2.5">Upload Document</div>
      </label>

      <input 
        id="file-upload" 
        type="file" 
        className="hidden" 
        onChange={handleFileChange} 
      />
      
      {fileName && (
        <div className="mt-4 text-sm text-gray-600 flex items-center">
          <div className="font-medium">{fileName}</div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
