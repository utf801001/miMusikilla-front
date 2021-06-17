class Tags{
  constructor(axios){
      this.axios = axios
  }

  async list(){
      const response = await this.axios.get("tags")
      return response.data
  } 
}

export default Tags