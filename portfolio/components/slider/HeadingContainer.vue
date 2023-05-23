<script setup lang="ts">

const props = defineProps({
  selectedCard: Object
})

</script>

<template>
    <div class="heading-container">
      {{ selectedCard?.name }}
    </div>
</template>

<style scoped>
.heading-container {
  padding: 24px;
  margin: 20% 20% 0 20%;
}
</style>