import axios from "axios";

export default {
  addBeer: (data) => {
    return axios.post("/api/beer/addBeers", data);
  },
  getBeers: () => {
    return axios.get("/api/beer/getBeers");
  },
};
