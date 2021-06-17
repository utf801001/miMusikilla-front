<template>
<div class="row gx-4 gx-lg-5 mx-2">
  <div class="col-md-4 mx-13 my-2">
    <div class="h-100">
        <div class="body">

            <img :src="this.project.image" class="card-img-top" alt="">
            <h3 class="title">{{this.project.title}}</h3>
            <h5 class="subtitle" 
            v-for="song in this.project.songs"
            :value="song"
            :key="song.id">{{song}}</h5>
            <h5 class="subtitle">{{this.project.year}}</h5>
            <h5 class="subtitle">{{this.project.country}}</h5>
            <h5 class="subtitle">{{this.project.songs}}</h5>
            <h5 class="subtitle">{{this.project.collabs}}</h5>
            <h5 class="subtitle">{{this.project.label}}</h5>
            <h5 class="subtitle">{{this.project.producer}}</h5>
            <h5 class="subtitle">{{this.project.recorded}}</h5>
            <h5 class="subtitle">{{this.project.mixed}}</h5>
            <h5 class="subtitle">{{this.project.master}}</h5>
            <h5 class="subtitle">{{this.project.genres[0].name}}</h5>
            <h5 class="subtitle">{{this.project.tags[0].name}}</h5>
            
        </div>
    </div>
  </div>
</div>  
</template>

<script>
export default {
  name: 'Project',
    data(){
      return{
        project: []
      };
    },
 
  async mounted() {
    console.log(this.$route.params.id)
    const project = await this.$api.projects.getProjectId(this.$route.params.id);
    this.project = project;
  }

}

</script>
