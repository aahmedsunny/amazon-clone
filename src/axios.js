import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5001/clone-a29e0/us-central1/api", // the API (Cloud Function) URL
});

export default instance;
