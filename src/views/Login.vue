<template>
  <section class="delicious-section contact-section">
    <div class="container mt-5">
      <div class="columns d-flex justify-content-center">
        <div class="column is-6 contact-form columns is-multiline">
          
          <div class="column is-12">
            <h3>INICIAR SESIÓN</h3>
            <p>Por favor, introduzca a continuación su usuario y contraseña para acceder a su cuenta.</p>
            <a class=" h3 badge badge-secondary my-3" href="/users">Si aún no tiene una cuenta pulse aquí para crear una</a>
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
            <button class="button is-warning"  @click="login">Login</button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {

        const response = await this.$api.auth.login(this.email, this.password)

        const token = response.token        

        this.$store.dispatch('login', token)

        this.$router.push("/")

      } catch (error) {
        console.log(error)
        alert("Por favor, introduzca correctamente su correo electrónico y contraseña para acceder")
      }
    },
  },
};
</script>