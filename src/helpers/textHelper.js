export const truncateText = (word, maxLength = 100) => {
  if (typeof word !== "string") return "";
  if (word.length > maxLength) {
    return word.substring(0, maxLength) + "...";
  }
  return word;
};
