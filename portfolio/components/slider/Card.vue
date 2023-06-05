<script setup lang="ts">

interface Card {
  id: number
  image: string
  name: string
}

let pressed = ref(false)

const props = defineProps({
  card: Object as PropType<Card>
})

const handleMouseDown = (event: MouseEvent) => {
  pressed.value = !pressed.value
}
</script>

<template>
    <div 
      class="card" 
      @mousedown="handleMouseDown"
      :style="{ 'background-image': 'url(' + card?.image +')'}"
      :class="[pressed.valueOf() ? 'slideIn' : '']"
    >
      {{ card?.name }}
    </div>
</template>

<style scoped lang="scss">
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
  box-shadow: 5px 6px 5px 1px rgb(0 0 0 / 40%);

  > * {
    pointer-events: none;
  }
}
</style>

  