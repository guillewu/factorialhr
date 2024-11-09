import PropTypes from "prop-types";

export default function Image({ imageUrl }) {
  return (
    <div className="basis-3/12">
      {imageUrl ? (
        <img
          className="w-full object-contain aspect-square"
          src={imageUrl}
        ></img>
      ) : (
        <div className="w-full aspect-square flex items-center justify-center text-center">
          Select a Product and Product Variant
        </div>
      )}
    </div>
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string,
};
