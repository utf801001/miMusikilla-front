<template>
  <section class="delicious-section contact-section">
    <div class="container mt-5">
      <div class="columns d-flex justify-content-center">
        <div class="column is-6 columns is-multiline contact-form">
          <div class="column is-12">
            <h3>CREAR CUENTA</h3>
            <p>Por favor, introduzca a continuación un nombre de usuario, su email y una contraseña para crear una nueva cuenta.</p>
            <a class=" h3 badge badge-secondary my-3" href="/auth/login">Si ya tiene una cuenta pulse aquí para acceder</a>
          </div>
          <div class="column is-6">
            <div class="form-group">
              <input
                v-model="nick"
                type="nick"
                class="form-control"
                placeholder="Nombre de usuario"
              />
            </div>
          </div>
          <div class="column is-6">
            <div class="form-group">
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="column is-6">
            <div class="form-group">
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Contraseña"
              />
            </div>
          </div>
            
          <div class="form-group d-flex justify-content-center">
            <button class="button is-warning"  @click="register">Register</button>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      nick: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {

        const response = await this.$api.auth.register(this.nick, this.email, this.password)

        const token = response.token        

        this.$store.dispatch('register', token)

        this.$router.push("/")
        
      } catch (error) {
        console.log(error)
        alert("Usuario y/o contraseña incorrectos.")
      }
    },
  },
};
</script>