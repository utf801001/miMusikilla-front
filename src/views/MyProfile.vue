<template>
 <section class="delicious-section contact-section">
    <div class="container mt-5">
      <div class="columns d-flex justify-content-center contact-form is-multiline">
        <div class="column is-12">
          <h3>BIENVENID@ {{this.profile.nick}}</h3>
          <p>MiMUSIKILLA, la web hecha por y para melómanos. Aquí podrás encontrar todos los datos técnicos relativos a tus obras favoritas. ¿Quién produjo el famoso "Parallel Lines" de Blondie? ¿Es cierto que Eric Clapton colaboró en "Lady Soul" de Aretha Franklin? Todas las respuestas a estas preguntas y más las encontrarás aquí, en MiMUSIKILLA.</p>
          <h5><a class="badge badge-success mb-5" href="/projects">Actualmente hemos implementado la opción "Sube tu música" que os permite a los usuarios subir la información de vuestros propios trabajos musicales</a></h5>

          <h1 class="mb-3 bold">DATOS DE USUARIO</h1>
          <div class="mb-3">
            <label for="nick" class="form-label">Nombre de usuario: {{this.profile.nick}} </label>
          </div>
          <div class="mb-5">
            <label for="nick" class="form-label">Correo electrónico: {{this.profile.email}} </label>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyProfile',

    data(){
        return{
          profile: "",
          nick: "",
          email: ""
        };
    },

    async mounted() {

      const headers = {
          'token': this.$store.getters.token,
      }
      const profile = await this.$api.auth.getProfile(headers);
      this.profile = profile;
      console.log(this.profile);

    }
};
</script>
