import React from 'react';

const LiveStreaming = ({ url, width = '100%', height = '500px', className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={url}
        width={width}
        height={height}
        allowFullScreen
        className="w-full h-full border-none"
      ></iframe>
    </div>
  );
};

export default LiveStreaming;