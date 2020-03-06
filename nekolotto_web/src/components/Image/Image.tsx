import React, { FunctionComponent } from "react";

type ImageProps = {
  alt: string;
  src: string;
  styles?: object;
};

const Image: FunctionComponent<ImageProps> = props => {
  const res2x = props.src.split(".")[0] + "@2x." + props.src.split(".")[1];
  const res3x = props.src.split(".")[0] + "@3x." + props.src.split(".")[1];

  return (
    <img
      src={props.src}
      alt={props.alt}
      srcSet={`${res2x} 2x, ${res3x} 3x`}
      style={{ display: "block", ...props.styles }}
    />
  );
};

export default Image;
