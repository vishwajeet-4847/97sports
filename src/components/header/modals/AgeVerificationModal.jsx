
import React from 'react';

const AgeVerificationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-content fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="login-popup-content bg-gray-900 rounded-xl w-full max-w-lg mx-4">
        <div className="modal-body p-6">
          <div className="login-panel-container confirm-container">
            <div className="confirm-text">
              <div className="header-popup flex justify-end">
                <a onClick={onClose} className="ui-link cursor-pointer text-gray-400 hover:text-white">
                  <i className="fas fa-times text-2xl">×</i>
                </a>
              </div>
              <div className="text1 text-confirm-bold text-2xl font-bold text-white">
                Non-Gambling Territories.
              </div>
              <hr className="confirm-line border-t border-gray-700 my-3" />
              <div className="text2 text-gray-300">
                Connecting to our site from non gambling countries, it will be User's responsibility to ensure that their use of the service is lawful.
              </div>
            </div>
            
            <div className="confirm-text mt-6">
              <div className="text1 text-confirm-bold text-2xl font-bold text-white">
                Underage gambling is prohibited.
              </div>
              <hr className="confirm-line border-t border-gray-700 my-3" />
              <div className="text2 text-gray-300">
                Please confirm if you are <span className="text-purple-400">18 years old and above</span> as of today.
              </div>
            </div>
            
            <div className="confirm-button flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={onConfirm}
                className="btn-verification btn-confirm w-full sm:w-1/2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
                tabIndex={0}
              >
                <span>Confirm</span>
              </button>
              <button 
                onClick={onClose}
                className="btn-verification w-full sm:w-1/2 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600"
              >
                <span>Exit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeVerificationModal;