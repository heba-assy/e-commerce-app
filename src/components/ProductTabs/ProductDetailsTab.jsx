import React from "react";

export default function ProductDetailsTab({ productDetails }) {
  const { description } = productDetails;
  return (
    <>
      <p>{description}</p>
    </>
  );
}
