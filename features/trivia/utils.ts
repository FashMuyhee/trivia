export const numberToAlpha = (number: number) => {
  return String.fromCharCode(number + 96);
};

export const cleanString = (encodedString: string) => {
  let decodedString = decodeURIComponent(encodedString);

  const cleanedString = decodedString.trim();

  return cleanedString;
};
