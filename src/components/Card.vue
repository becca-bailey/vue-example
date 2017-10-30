<template>
  <div class="c-card">
    <header class="c-card__header">
      <div class="c-card__title">{{ title }}</div>
    </header>
    <div class="c-card__body">
      {{ content }}
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'card',
    props: ['title', 'content']
  }
</script>