import axios from "axios";

const instance = axios.create({
  baseURL: "https://tap-room-48dee.firebaseio.com/"
});

export default instance;
