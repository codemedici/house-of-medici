/**
 * Creates a navigable URL for IPFS or normal links.
 * @param url - The input URL.
 * @returns The navigable URL.
 */
export const createNavigateableUrl = (url = "") => {
  const isIPFSImg = /ipfs:\/\//.test(url);
  return isIPFSImg ? `${ipfsBaseUrl}/${url.split("//")[1]}` : url;
};

/**
 * Converts a title and ID into a URL-safe slug.
 * @param args - Parts of the title and ID.
 * @returns A slugified string.
 */
export const createArtLink = (...args: string[]) => {
  if (!args.length) return "";
  return args
    .join(" ")
    .split(" ")
    .filter((val) => val.trim())
    .join("-")
    .replaceAll(/[#?/%\.]+/g, "");
};

/**
 * Shortens an Ethereum address for readability.
 * @param address - The Ethereum address.
 * @returns The trimmed address.
 */
export const trimAddress = (address: string) => {
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

/**
 * Capitalizes the first letter of a string.
 * @param str - The input string.
 * @returns The capitalized string.
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Ensures a thrown value is converted to an `Error`.
 * @param value - The thrown value.
 * @returns An `Error` object.
 */
export const ensureError = (value: unknown): Error => {
  if (value instanceof Error) return value;

  let stringified = "[Unable to stringify the thrown value]";
  try {
    stringified = JSON.stringify(value);
  } catch {}

  return new Error(`Unexpected error value: ${stringified}`);
};
