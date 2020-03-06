import React from "react";

type ImageProps = {
  alt: string;
  src: string;
  style?: React.CSSProperties;
};

const Image = (props: ImageProps) => {
  const res2x = props.src.split(".")[0] + "@2x." + props.src.split(".")[1];
  const res3x = props.src.split(".")[0] + "@3x." + props.src.split(".")[1];

  return (
    <img
      src={props.src}
      alt={props.alt}
      srcSet={`${res2x} 2x, ${res3x} 3x`}
      style={{ display: "block", ...props.style }}
    />
  );
};

export default Image;
