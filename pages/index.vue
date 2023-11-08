<template>
  <div class="container mt-5">
    <div class="row">
      <div v-if="isLoading">Loading applications...</div>
      <div v-if="error">{{ error }}</div>
      <div v-else>
        <div v-for="application in applications" :key="application._id">
          <ApplicationItem :application="application" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationItem from '~/components/ApplicationItem.vue';

export default {
  middleware: 'auth',
  data() {
    return {
      applications: [],
      isLoading: false,
      error: null
    };
  },
  created() {
    this.fetchApplications();
  },
  methods: {
    async fetchApplications() {
      this.isLoading = true;
      try {
        const response = await this.$axios.get('/application');
        this.applications = response.data;
      } catch (e) {
        this.error = e.message;
      } finally {
        this.isLoading = false;
      }
    }
  },
  components: {
    ApplicationItem
  }
};
</script>