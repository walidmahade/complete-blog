/**
 * Trim a string from given parameters
 * @param str
 * @param max
 * @param suffix
 */
export const truncate = (str: string, max: number, suffix: string) =>
  str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`
