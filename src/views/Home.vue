<template>
<div class="row gx-4 gx-lg-5 mx-2">
  <div class="col-md-4 mx-13 my-2" 
            v-for="project in projects"
            :value="project"
            :key="project.id">
      <div class="card h-100">
          <router-link class="nav-link" :to="{path:'/projects/project/'+ project._id}">
          <div class="card-body">
              <img :src="project.image" class="card-img-top" alt="">
              <h3 class="card-title">{{ project.title }}</h3>
              <h5 class="card-subtitle">{{ project.artist }}</h5>
          </div>
          </router-link>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',

    data(){
        return{
            projects: []
        };
    },

    async mounted() {
    const projects = await this.$api.projects.list();
    this.projects = projects;
    console.log(this.projects);
    }
};
</script>