import axios from "axios";

export default axios.create({
    baseURL: "https://guestbook-app.azurewebsites.net",
    headers: {
        "Content-type": "application/json"
    }
});