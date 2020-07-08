/**
 * Returns the keys and values of provided search parameter as an object
 * @param {string} str URL search string
 * @author Inioluwa Sogelola
 */
export const getSearchParams = (str: string): any => {
  const searchParams: any = {};

  const url = new URLSearchParams(str);
  for (const key of Array.from(url.keys())) {
    searchParams[key] = url.get(key);
  }
  return searchParams;
};

/**
 * Sets or appends object to the URL search params
 * @param {any} obj object containing search params keys and values
 * @param {string} searchUrl URL search string
 * @author Inioluwa Sogelola
 */
export const setSearchParams = (obj: any, searchUrl: string = "?"): void => {
  const url = new URLSearchParams(searchUrl);

  for (let [key] of Object.entries(obj)) {
    url.set(key, obj[key]);
  }
  window.location.search = url.toString();
};
