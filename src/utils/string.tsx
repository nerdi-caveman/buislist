export const textToSlug = (str: string): string => str.replace(/[\s.]/g, "-");

export const slugToText = (str: string): string => str.replace(/[-]/g, " ");

export const toCapital = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

export const toTitleCase = (str: string): string => {
  let result: string = "";
  const strToArray: string[] = str.split(" ");
  for (let i = 0; i < strToArray.length; i++) {
    result += " " + toCapital(strToArray[i]);
  }
  return result.trimLeft();
};
