import axios from "axios";

class API {
    AUTH_URL = 'http://localhost:8000/auth'
    postAddNewUserUrl = `${this.AUTH_URL}/registration`;
    postAuthUserUrl = `${this.AUTH_URL}/authorization`;

    async registration (login, password) {
        return await axios.post(this.postAddNewUserUrl, {
            login,
            password,
        });
    }

    async authorization (login, password) {
        return await axios.post(this.postAuthUserUrl, {
            login,
            password,
        })
    }
}

export default new API();