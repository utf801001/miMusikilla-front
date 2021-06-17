<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">miMUSIKILLA</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" v-if="isAuth">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="isAuth">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link class="nav-item nav-link" to="/projects">
            Sube tu música
          </router-link>
          <router-link class="nav-item nav-link" to="/me/profile">
            Mi perfil
          </router-link>
          <router-link class="nav-item nav-link" to="/me/projects">
            Mis proyectos
          </router-link>
          <router-link class="nav-item nav-link" to="/me/ratings">
            Mis valoraciones
          </router-link>
        </ul>
      </div>
      <div class="buttons">
        <a v-if="!isAuth" href="/auth/login" id="iniciarSesion" class="btn btn-outline-light mx-2">Iniciar sesión</a>
        <a v-if="!isAuth" href="/users" class="btn btn-outline-warning">Crear cuenta</a>
        <a v-if="isAuth" href="/" @click="logout" class="btn btn-outline-warning">Cerrar sesión</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: "Navbar",
   
    computed: {
        isAuth(){
            return this.$store.getters.isAuth
        },
         currentUser(){
            return this.$store.getters.currentUser
        }
    },
    methods: {
        logout(){
          this.$store.dispatch('logout')
        }
    }
}
</script>
