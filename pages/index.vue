<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Jobber</h1>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  middleware: 'auth'
})
</script>
