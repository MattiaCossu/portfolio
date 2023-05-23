<script setup lang="ts">

interface Card {
  id: number
  image: string
  name: string
}

const props = defineProps({
  card: Object as PropType<Card>
});

// ipotetica funzione di animazione
const animateCard = () => {
  // implementa qui l'animazione
};
</script>

<template>
    <div class="card" :style="{ 'background-image': 'url(' + card?.image +')'}">
      {{ card?.name }}
    </div>
</template>

<style scoped>
.card {
  width: var(--card-width);
  height: var(--card-height);
  margin: var(--card-margin);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  z-index: 10;
  background-size: var(--card-bg-size);
  background-position: var(--card-bg-position);
  flex: 0 0 auto;
  display: var(--card-display);
  align-items: var(--card-align-items);
  /*box-shadow: 5px 6px 5px 1px rgb(0 0 0 / 40%);*/
}
</style>

  