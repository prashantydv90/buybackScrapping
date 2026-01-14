// api.js
import axios from "axios";

export const getBuybacks = () =>
  axios.get("https://buybackscrapping.onrender.com/api/buybacks");


export const syncBuybacks = () => axios.post("https://buybackscrapping.onrender.com/api/buybacks/insert");

