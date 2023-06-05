import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "853ac149315c4b0aba76a37f7ba69bc8",
  },
});
