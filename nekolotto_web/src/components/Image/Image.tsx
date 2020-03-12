import React, { forwardRef, CSSProperties, Ref } from "react";

type ImageProps = {
  alt: string;
  src: string;
  style?: CSSProperties;
  ref?: Ref<HTMLImageElement>;
  onLoad?: Function;
};

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const res2x = props.src.split(".")[0] + "@2x." + props.src.split(".")[1];
  const res3x = props.src.split(".")[0] + "@3x." + props.src.split(".")[1];

  return (
    <img
      src={props.src}
      alt={props.alt}
      srcSet={`${res2x} 2x, ${res3x} 3x`}
      style={{ display: "block", ...props.style }}
      ref={ref}
      onLoad={e => {
        const imageTarget = e.target as HTMLImageElement;
        props.onLoad && props.onLoad(e.target && imageTarget.width);
      }}
    />
  );
});

export default Image;
