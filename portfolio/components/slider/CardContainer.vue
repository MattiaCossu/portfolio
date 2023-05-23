<script setup lang="ts">
import Card from './Card.vue'

interface Card {
    id: number
    image: string
    name: string
}

const props = defineProps({
  cards: Array as PropType<Card[]>
})

const emit = defineEmits(["cardSelected"])

let pressed = ref(false)
let startX = ref(0)
let startScrollLeft = ref(0)

let cardContainerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  cardContainerRef.value = document.querySelector('.card-container')
})

// gestisce l'evento di pressione del mouse
const handleMouseDown = (event: MouseEvent) => {
  pressed.value = true
  startX.value = event.pageX - cardContainerRef.value!.offsetLeft
  startScrollLeft.value = cardContainerRef.value!.scrollLeft
}

// gestisce l'evento di rilascio del mouse
const handleMouseUp = () => {
  pressed.value = false
}

// gestisce l'evento di movimento del mouse
const handleMouseMove = (event: MouseEvent) => {
  if (!pressed.value) return
  event.preventDefault()
  
  const x = event.pageX - cardContainerRef.value!.offsetLeft
  const dx = x - startX.value
  cardContainerRef.value!.scrollLeft = startScrollLeft.value - dx
}

const onCardClick = (card: Card) => {
  emit("cardSelected", card)
}
</script>


<template>
  <div class="card-container"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove">
    <Card 
      v-for="card in cards" 
      :key="card.id" 
      :card="card" 
      @click="onCardClick(card)" 
    />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: var(--card-container-height);
  width: var(--card-container-width);
  margin: var(--card-container-margin);
  padding: var(--card-container-padding);
  position: relative;
  z-index: 1;
  overflow: hidden;
  cursor: grab;
}
</style>
