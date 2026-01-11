// api.js
import axios from "axios";

export const getBuybacks = () =>
  axios.get("http://localhost:5555/api/buybacks");

