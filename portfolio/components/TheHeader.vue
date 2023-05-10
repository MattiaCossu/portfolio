<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <h1>Header</h1>
    <nav>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
                <button @click="toggleDark()"> Toggle Dark Mode </button>
            </li>
        </ul>
    </nav>
</template>
