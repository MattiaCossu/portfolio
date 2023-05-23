<script setup lang="ts">
import HeadingContainer from "./HeadingContainer.vue"
import CardContainer from "./CardContainer.vue"

interface Card {
  id: number
  image: string
  name: string
}

const cards = ref<Card[]>([{
  id: 1,
  image: "https://i.postimg.cc/tCk1v4H2/3877461.jpg",
  name: "Mount Yoshino"
},
{
  id: 2,
  image: "https://i.postimg.cc/63PcvfM4/download.jpg",
  name: "Kumano-Nachi Taisha"
},
{
  id: 3,
  image: "https://i.postimg.cc/3wfr2kmD/download-1.jpg",
  name: "Daigoji Temple"
},
{
  id: 4,
  image: "https://i.postimg.cc/N0dkhvrw/download-3.jpg",
  name: "Himeji Castle"
},
{
  id: 5,
  image: "https://i.postimg.cc/vT3dGJzQ/download-4.jpg",
  name: "Shirakawa-go Village"
},
{
  id: 6,
  image: "https://i.postimg.cc/1tRQbRGW/download-5.jpg",
  name: "Mount Fuji"
}])

let selectedCard = ref<Card | undefined>(undefined)

onMounted(() => {
  selectedCard.value = cards.value[0]
  cards.value = cards.value.filter(c => c.id !== cards.value[0].id)
})

const onCardSelected = (card: Card) => {
  cards.value.push(selectedCard.value!)
  cards.value = cards.value.filter(c => c.id !== card.id)
  selectedCard.value = card
}

const cardBackground = computed(() => {
  if (!selectedCard.value) return ''
  return `url(${selectedCard.value.image})`
})

</script>

<template>
  <div class="slider" :style="{ backgroundImage: cardBackground }">
    <HeadingContainer :selectedCard="selectedCard" />
    <CardContainer :cards="cards" @cardSelected="onCardSelected" />
  </div>
</template>

<style scoped lang="scss">
.slider {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  background-size: cover;
}
</style>