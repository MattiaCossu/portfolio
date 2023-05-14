<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)

const menuOpen = ref<boolean>(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const navigation = [
    { name: 'home', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'blog', href: '/blog' }
]

</script>

<template>
    <div class="navbar-container">
        <div class="navbar">
            <div class="navbar--logo">
                <h1>Logo</h1>
            </div>
            <Transition name="slide-fade">
                <div class="navbar--links--mobile" v-if="menuOpen">
                    <nuxt-link v-for="(nav, index) in navigation" :key="index" :to="nav.href">{{ nav.name }}</nuxt-link>
                </div>
            </Transition>
            <div class="navbar--content">
                <div class="navbar--links">
                    <nuxt-link v-for="(nav, index) in navigation" :key="index" :to="nav.href">{{ nav.name }}</nuxt-link>
                </div>
                <div class="navbar--buttons">
                    <div v-if="!isDark">
                        <SvgMoon @click="toggleDark()" />
                    </div>
                    <div v-else>
                        <SvgSun @click="toggleDark()" />
                    </div>
                </div>
                <div class="navbar--hamburger">
                    <SvgHamburger @click="toggleMenu()" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '~/assets/sass/app.scss';

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 5rem;
    position: fixed;
    width: 100%;
    z-index: 10000;
    font-family: Nintendoid1;


    &--hamburger {
        svg {
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
        }

        @include tablet-up {
            display: none;
        }
    }

    &--logo {
        h1 {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }

    &--buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
        margin: 0 16px;

        svg {
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
            color: var(--primary-color);
        }
    }

    &--content {
        display: flex;
        justify-content: space-between;
        padding: 0.75rem;
        align-items: center
    }

    @include tablet-up {
        &--content {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem;
            align-items: center;
        }
    }

    &--links {
        display: none;

        @include tablet-up {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50%;
            height: 100%;
            
            a {
                color: var(--primary-color);
                font-size: 1rem;
                font-weight: 500;
                text-decoration: none;
                margin: 0 1rem;
                text-align: center;
            }

        }

        &--mobile {

            @include tablet-up {
                display: none;
            }

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: calc(100vh - 5rem);
            background-color: var(--primary-color);
            position: absolute;
            top: 5rem;
            left: 0;
            z-index: 1;

            a {
                color: white;
                font-size: 1.5rem;
                font-weight: 700;
                text-decoration: none;
                margin: 1rem 0;
            }
        }
    }
}
</style>
