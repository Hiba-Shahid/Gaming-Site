import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ffd46ab303274d228355cbcfaaae8e79",
  },
});