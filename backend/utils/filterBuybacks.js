// utils/filterBuybacks.js

export function isBuyback(item) {
  const text = (item.subject + " " + item.details).toLowerCase();
  return text.includes("Exchange");
}

