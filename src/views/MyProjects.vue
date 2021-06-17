<template>
  <section class="delicious-section contact-section">
    <div class="container mt-5">
      <div class="columns d-flex justify-content-center contact-form is-multiline">
        <div class="column is-12">
          <h1>PROYECTOS SUBIDOS</h1>
          
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

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyProjects',

    data(){
        return{
            projects: []
        };
    },

    async mounted() {

      const headers = {
          'token': this.$store.getters.token,
      }
      const projects = await this.$api.projects.listMyProjects(headers);
      this.projects = projects;
      console.log(this.projects);

    }
};
</script>