import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStarHalfStroke,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({rate}) {
  function getStarIcon(position) {
    if (rate >= position) {
      return solidStar;
    } else if (rate >= position - 0.5) {
      return faStarHalfStroke;
    } else {
      return regularStar;
    }
  }
  return (
    <>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((position) => (
          <FontAwesomeIcon key={position} icon={getStarIcon(position)} />
        ))}
      </div>
    </>
  );
}
