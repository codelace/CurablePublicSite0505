
import React from 'react';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <div 
      className="absolute -top-6 right-0 bg-gunmetal-800/90 text-xs px-2 py-1 rounded-t-md text-titanium-white/70 hover:bg-gunmetal-700/90 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      Close
    </div>
  );
};

export default CloseButton;
