// utils/buildNseFileUrl.js

export function buildNseFileUrl(path) {
  if (!path) return null;
  return `https://www.nseindia.com/${path}`;
}

