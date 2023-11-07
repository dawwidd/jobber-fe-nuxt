<template>
  <section class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h2 class="text-center mb-3">Register</h2>

        <Notification :message="error" v-if="error" />

        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model="password"
              required
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-dark btn-block">Register</button>
          </div>
        </form>

        <div class="text-center mt-3">
          Already got an account? <nuxt-link to="/login">Login</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/notification'

export default {
  middleware: 'guest',
  
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('auth/register', {
          email: this.email,
          password: this.password
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          },
        });

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>