import { useState } from "react";
import Star from "./Star";
import Styles from "../styles/starRating.module.css";
import PropTypes from "prop-types";

StarRating.propTypes = {
  max: PropTypes.number,
  color: PropTypes.string,
  stroke: PropTypes.string,
  size: PropTypes.number,
};

function StarRating({
  max = 5,
  color = "#fcc419",
  stroke = "#fff",
  size = 48,
}) {
  const [rating, setRating] = useState(0);
  const [tmpRating, setTmpRating] = useState(0);

  return (
    <>
      <div className={Styles.containerStyle}>
        {Array.from({ length: max }, (_, i) => (
          <Star
            size={size}
            color={color}
            stroke={stroke}
            key={i}
            onRating={() => setRating(i + 1)}
            full={tmpRating ? tmpRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTmpRating(i + 1)}
            onHoverOut={() => setTmpRating(0)}
          />
        ))}
        <p className={Styles.textStyle}> {tmpRating || rating || "0"} stars</p>
      </div>
    </>
  );
}

export default StarRating;
