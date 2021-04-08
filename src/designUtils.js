const HIGH_RATING = "high-rating";
const LOW_RATING = "low-rating";

function isHighRating(score) {
  return score > 5;
}

export const getHighRatingClass = (score) =>
  isHighRating(score) ? HIGH_RATING : LOW_RATING;
