import axios from "axios";

export default {
  getHolders: function() {
    return axios.get("/api/holders");
  },
  getHolder: function(id) {
    return axios.get("/api/holders/" + id);
  },
  deleteHolder: function(id) {
    return axios.delete("/api/holders/" + id);
  },
  saveHolder: function(holderData) {
    return axios.post("/api/holders", holderData);
  }
};
