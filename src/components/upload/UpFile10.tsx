import React, { useRef, useState, useCallback } from 'react';

interface FileData {
  file: File;
  preview: string;
  name: string;
  size: string;
  type: string;
}

interface UpFile10Props {
  onFilesSelected?: (files: File[]) => void;
  onFileData?: (fileData: FileData[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  fileTypes?: string[]; // Custom file types to accept
}

export default function UpFile10({
  onFilesSelected,
  onFileData,
  accept = '*', // Accept all file types by default
  multiple = true,
  maxSize = 10, // 10MB default
  fileTypes = [], // Empty array means accept all types
}: UpFile10Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileData[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file: File): boolean => {
    const maxSizeBytes = maxSize * 1024 * 1024; // Convert MB to bytes

    // If fileTypes array is provided, validate against it
    if (fileTypes.length > 0 && !fileTypes.includes(file.type)) {
      const supportedTypes = fileTypes
        .map((type) => type.split('/')[1]?.toUpperCase() || type)
        .join(', ');
      alert(`File type ${file.type} is not supported. Supported types: ${supportedTypes}`);
      return false;
    }

    if (file.size > maxSizeBytes) {
      alert(`File size ${formatFileSize(file.size)} exceeds maximum allowed size of ${maxSize}MB.`);
      return false;
    }

    return true;
  };

  const processFiles = useCallback(
    (files: FileList) => {
      const validFiles: File[] = [];
      const fileDataArray: FileData[] = [];

      Array.from(files).forEach((file) => {
        if (validateFile(file)) {
          validFiles.push(file);

          const fileData: FileData = {
            file,
            preview: URL.createObjectURL(file),
            name: file.name,
            size: formatFileSize(file.size),
            type: file.type,
          };

          fileDataArray.push(fileData);
        }
      });

      if (validFiles.length > 0) {
        setSelectedFiles((prev) => (multiple ? [...prev, ...fileDataArray] : fileDataArray));

        // Call callbacks
        if (onFilesSelected) {
          onFilesSelected(validFiles);
        }

        if (onFileData) {
          onFileData(fileDataArray);
        }
      }
    },
    [multiple, onFilesSelected, onFileData, maxSize],
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      processFiles(event.target.files);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        processFiles(e.dataTransfer.files);
      }
    },
    [processFiles],
  );

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);

    // Update callbacks
    if (onFilesSelected) {
      onFilesSelected(newFiles.map((fd) => fd.file));
    }

    if (onFileData) {
      onFileData(newFiles);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full space-y-4">
      {/* Upload Area */}
      <div
        className={`flex items-center justify-center w-full border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center py-8">
          <svg
            className="w-8 h-8 text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span className="text-sm text-gray-500 text-center">
            <button
              type="button"
              className="border border-gray-600 bg-white h-10 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Upload
            </button>
            <span className="block mt-2">or drag and drop</span>
            <span className="block text-xs text-gray-400 mt-1">
              {fileTypes.length > 0
                ? `${fileTypes.map((type) => type.split('/')[1]?.toUpperCase() || type).join(', ')} up to ${maxSize}MB`
                : `All file types up to ${maxSize}MB`}
            </span>
          </span>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={handleFileChange}
        />
      </div>

      {/* File Preview */}
      {selectedFiles.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">Selected Files:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {selectedFiles.map((fileData, index) => (
              <div key={index} className="relative border border-gray-200 rounded-lg p-3 bg-white">
                <div className="flex items-center space-x-3">
                  <img
                    src={fileData.preview}
                    alt={fileData.name}
                    className="w-16 h-16 object-cover rounded border"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{fileData.name}</p>
                    <p className="text-xs text-gray-500">{fileData.size}</p>
                    <p className="text-xs text-gray-400">{fileData.type}</p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
