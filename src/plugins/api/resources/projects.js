class Projects{
  constructor(axios){
      this.axios = axios
  }

  async list(){
    const response = await this.axios.get("projects")
    console.log(response)
    return response.data
} 

  async post(newProject, headers){
    const response = await this.axios.post("projects", {newProject}, {headers:headers})
    return response.data
}

  async getProjectId(projectId){
    const response = await this.axios.get("projects/"+ projectId)
    return response.data
  }

  async listMyProjects(headers){
    const response = await this.axios.get("me/projects", {headers:headers})
    console.log(response)
    return response.data
  } 
}

export default Projects