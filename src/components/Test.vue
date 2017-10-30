<template>
  <app-main>
    <h1>This is my page</h1>
    <card title="My card" content="Some content"></card>
  </app-main>
</template>

<script lang="ts">
  import Card from './Card.vue';
  import Main from './layouts/Main.vue';

  export default {
    components: {
      'card': Card,
      'app-main': Main,
    }
  }
</script>

