import axios from 'axios'
import Auth from './resources/auth'
import Genres from './resources/genres'
import Tags from './resources/tags'
import Projects from './resources/projects'


export default {
    install: (Vue, options) => {
        axios.defaults.baseURL = options.baseURL
        
        Vue.prototype.$api = {
            auth: new Auth(axios),
            genres: new Genres(axios),
            tags: new Tags(axios),
            projects: new Projects(axios),
        }
    }
}