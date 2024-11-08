import React from "react";

const GroovySeparator = () => {
  return (
    <div className="relative w-full pointer-events-none">
      <div
        className="absolute w-[140%] -left-[20%] top-0 h-screen"
        style={{
          boxShadow: "inset 0px 10px 10px -4px rgba(0,0,0,0.75)",
        }}
      />
    </div>
  );
};

export default GroovySeparator;
