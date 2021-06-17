class Auth{
    constructor(axios){
        this.axios = axios
    }

    async login(email, password){
        const response = await this.axios.post("auth/login", {email, password})
        return response.data
    } 

    async register(nick, email, password){
        const response = await this.axios.post("users", {nick, email, password})
        return response.data
    } 

    async getProfile(headers){
        const response = await this.axios.get("me/profile", {headers:headers})
        return response.data
    }
}

export default Auth