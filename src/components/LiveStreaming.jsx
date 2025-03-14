import React from 'react';

const LiveStreaming = ({ url }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
    <iframe
      src={url}
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full border-none custom-scrollbar"
      style={{ overflow: "hidden" , objectFit:"cover" }}
    ></iframe>
  </div>
  );
};

export default LiveStreaming;