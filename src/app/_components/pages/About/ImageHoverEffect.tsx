import React from "react";

type ImageHoverEffectProps = {
  topImage: string;
  bottomImage: string;
  altText?: string;
};

const ImageHoverEffect: React.FC<ImageHoverEffectProps> = ({
  topImage,
  bottomImage,
  altText = "Hover Effect Image",
}) => {
  return (
    <div className="hover-effect-container">
      {/* Bottom Image */}
      <img
        src={bottomImage}
        alt={`${altText} Background`}
        className="hover-effect-image hover-effect-bottom"
      />
      {/* Top Image */}
      <img
        src={topImage}
        alt={`${altText} Foreground`}
        className="hover-effect-image hover-effect-top"
      />
    </div>
  );
};

export default ImageHoverEffect;
