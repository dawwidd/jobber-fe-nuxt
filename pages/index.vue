<template>
  <div class="container py-4">
    <h1>Jobber</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  middleware: 'auth'
})
</script>
