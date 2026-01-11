// api.js
import axios from "axios";

export const getBuybacks = () =>
  axios.get("https://buybackscrapping.onrender.com/api/buybacks");

