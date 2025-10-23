import React, { useState, useRef } from 'react';
import jsQR from 'jsqr';
import { Modal } from '../ui/modal';

interface ModalScanQrProps {
  isOpen: boolean;
  onClose: () => void;
  onScanSuccess: (data: string) => void;
}

export default function ModalScanQr({ isOpen, onClose, onScanSuccess }: ModalScanQrProps) {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setErrorMessage('');
      setScanResult(null);

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScanImage = () => {
    if (!selectedImage) {
      setErrorMessage('Vui lòng chọn một ảnh để quét.');
      return;
    }

    setErrorMessage('');
    setScanResult(null);

    const img = imageRef.current;
    const canvas = canvasRef.current;

    if (img && canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });

        if (code) {
          setScanResult(code.data);
          onScanSuccess(code.data);
        } else {
          setErrorMessage('Không tìm thấy mã QR nào trong ảnh này.');
        }
      }
    }
  };

  const clearSelectedImage = () => {
    setSelectedImage(null);
    setScanResult(null);
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[900px] m-4">
      <div className="no-scrollbar relative w-full max-w-[900px] overflow-y-auto rounded-3xl bg-gray-200 p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 ">Quét mã QR từ ảnh- Camera</h4>
        </div>
        <div className="w-full border-b border-gray-700" />

        <div className="flex flex-col">
          <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3 flex flex-col items-center justify-center gap-6">
            <input
              id="file-upload"
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            <div
              className="relative w-full max-w-sm aspect-square rounded-lg overflow-hidden border border-gray-600 shadow-lg flex items-center justify-center cursor-pointer group bg-gray-700"
              onClick={!selectedImage ? triggerFileInput : undefined}
            >
              {!selectedImage ? (
                <>
                  <span className="absolute text-gray-300 text-lg font-medium group-hover:text-blue-400 transition-colors">
                    Nhấn để chọn
                  </span>
                  {/* 4 góc vuông màu trắng */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-white rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-white rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white rounded-br-lg"></div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    ref={imageRef}
                    src={selectedImage}
                    alt="QR Code Preview"
                    className="max-w-full max-h-full object-contain"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      clearSelectedImage();
                    }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-lg leading-none hover:bg-red-700 transition-colors z-10"
                    aria-label="Xóa ảnh đã chọn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  {/* 4 góc vuông trên ảnh đã chọn */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-white rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-white rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white rounded-br-lg"></div>
                  </div>
                </>
              )}
            </div>

            {selectedImage && (
              <button
                type="button"
                onClick={handleScanImage}
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Quét mã QR
              </button>
            )}

            {scanResult && (
              <div className="mt-4 p-4 w-full max-w-sm bg-gray-700 dark:bg-gray-800 rounded-lg text-center">
                <p className="font-semibold text-white">Kết quả:</p>
                <p className="break-words text-sm text-gray-300">{scanResult}</p>
              </div>
            )}

            {errorMessage && (
              <div className="mt-4 p-4 w-full max-w-sm bg-red-200 dark:bg-red-800 rounded-lg text-center text-red-700 dark:text-red-300">
                {errorMessage}
              </div>
            )}
          </div>
          <div className="w-full flex items-center justify-end gap-2 md:gap-4 md:mt-3 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </Modal>
  );
}
