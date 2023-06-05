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
let selected = ref(false)
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
  selected.value = !selected.value
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
      :class="[selected.valueOf() ? 'slideIn' : '']"
      @click="onCardClick(card)" 
    />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: nowrap;
  width: calc(var(--card-width) * 4.7);
  padding-right: 16px;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.card-container::-webkit-scrollbar { /* WebKit */
  width: 0;
  height: 0;
}
.card.slideIn {
  animation: slideInFromRight 1s forwards;
}

@keyframes slideInFromRight {
  0% {
    margin-left: calc(var(--card-margin) * 3);
  }
  100% {
    margin-left: var(--card-margin);
  }
}
</style>
