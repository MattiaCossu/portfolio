<template>
    <div ref="el" class="container" @resize="onResize">
        <canvas ref="canvas"></canvas>
    </div>
</template>
  
<script setup lang="ts">

const el = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
useRainEffect(canvas, el)

const onResize = () => {
    if (canvas.value && el.value) {
        canvas.value.width = el.value.clientWidth
        canvas.value.height = el.value.clientHeight
    }
};

onMounted(() => {
    window.addEventListener('resize', onResize)
    onResize();
});

onUnmounted(() => {
    window.removeEventListener('resize', onResize)
});
</script>
  
<style lang="scss">
@import '~/assets/sass/app.scss';

.container {
    width: 100%;
    height: 100%;
    
    overflow: hidden;
}
</style>
  