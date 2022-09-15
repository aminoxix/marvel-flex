import React from "react";

export default function Logo({ text, src, altText, width }) {
  if (src) {
    return <img width={width} src={src} alt={altText} />;
  }

  return <h1>{text}</h1>;
}
