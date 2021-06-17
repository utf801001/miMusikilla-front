class Genres{
  constructor(axios){
      this.axios = axios
  }

  async list(){
      const response = await this.axios.get("genres")
      return response.data
  } 
}

export default Genres