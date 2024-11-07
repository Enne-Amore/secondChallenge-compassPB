import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Does not render the modal if isOpen is false
  if (!isOpen) return null;

  // Function to detect click outside the modal and close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(); // Fecha o modal se o clique foi na sobreposição
    }
  };

  return (
    <div
      className="modal-overlay fixed inset-0 bg-black 
      bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}  // Detect click outside the modal
    >
      <div className="modal-content bg-white p-6 rounded-lg w-80">
        <h2 className="text-xl font-semibold">Thank You for Subscribing!</h2>
        <p className="mt-2">You will now receive updates.</p>
        <button 
          onClick={onClose} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
