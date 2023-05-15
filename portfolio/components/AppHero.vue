<script setup lang="ts">

const el = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

useRainEffect(canvas, el)

const onResize = () => {
    if (canvas.value && el.value) {
        canvas.value.width = el.value.clientWidth
        canvas.value.height = el.value.clientHeight
    }
}

/*const { text: titleChars, startTyping } = useTypingEffect('Mattia Cossu')

onMounted(async () => {
    await startTyping();
})*/

onMounted(() => {
    window.addEventListener('resize', onResize)
    onResize();
})

onUnmounted(() => {
    window.removeEventListener('resize', onResize)
})
</script>

<template>
    <div ref="el" class="hero">
        <canvas ref="canvas"></canvas>
        <div class="hero--container">
            <p class="hero--heading">Hi all, I am</p>
            <h1 v-motion-roll-left class="hero--title">Mattia</h1>
            <h2  v-motion-roll-left class="hero--subtitle">> Computer Scientist</h2>    
            <div class="hero--content">
                <div>// welcome to my portfolio</div>
                <div>// you can also see my projects on my Github page</div>
                <span style="color: var(--accent-color-light)">const </span><span style="color: var(--secondary-color-accent)">gitubLink </span><span> = </span><span style="color: var(--accent-color);">“<a style="color: var(--accent-color);" href="https://github.com/MattiaCossu">https://github.com/MattiaCossu</a>”</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '~/assets/sass/app.scss';

.hero {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    
    canvas {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -9999;
    }
    .hero--container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        margin: 0 2rem; 
        z-index: 9999;
        
        > * {
            margin: 0;
        }
        .hero--heading {
            font-weight: 450;
        }
        .hero--title {
            display: flex;
            flex-direction: row;
            font-weight: 400;
            margin: 0.7rem 0;
            font-family: Nintendoid1;
        }
        .hero--subtitle {
            font-weight: 400;
            margin-top: 0.25rem;
            color: var(--accent-color-light);
        }
        .hero--content {
            font-size: var(--fontsize-small);
            font-weight: 450;
            margin: 2.5rem 0;
            line-height: 35px;
            color: var(--secondary-color);
        }
    }
}
</style>