const isUpperCase = (charCode) => charCode >= 65 && charCode <= 90;
const isLowerCase = (charCode) => charCode >= 97 && charCode <= 122;

const generateLetter = (charCode, startCode, endCode) =>
  charCode <= endCode
    ? String.fromCharCode(charCode)
    : String.fromCharCode(startCode - 1 + (charCode % endCode));

const mapCharacter = (character, shiftFactor) => {
  const charCode = character.charCodeAt(0);

  if (isUpperCase(charCode))
    return generateLetter(charCode + shiftFactor, 65, 90);

  if (isLowerCase(charCode))
    return generateLetter(charCode + shiftFactor, 97, 122);

  return character;
};

const caesarCipher = (string, shiftFactor) =>
  string
    .split('')
    .map((character) => mapCharacter(character, shiftFactor))
    .join('');

export default caesarCipher;
