import React from "react";

const Section = ({ children, className = "" , backgroundImage }) => {
  return (
    <section className={`w-full bg-gray-100 py-8 ${className}`} style={{ backgroundImage: `url(${backgroundImage || ""})` }}>
      <div className="w-[80%] mx-auto">{children}</div>
    </section>
  );
};

export default Section;