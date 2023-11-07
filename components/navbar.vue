<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">Jobber</nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="!isAuthenticated">
            <nuxt-link class="nav-link" to="/register">Register</nuxt-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <nuxt-link class="nav-link" to="/login">Log In</nuxt-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item dropdown">
            <b-dropdown :text="loggedInUser.email" type="light" variant="light">
              <b-dropdown-item to="/profile">My Profile</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click.prevent="logout">Logout</b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('/login');
    }
  }
}
</script>
