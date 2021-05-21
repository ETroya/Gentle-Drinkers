import axios from "axios";

export default {
    getBeer: function() {
        return axios.get("/api/beers");
    }
}