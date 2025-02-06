<template>
    <Header />
    <Hero v-if="isHome" />
    <main class="container mx-auto p-4 mt-4">
        <slot />
    </main>
</template>

<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import type { PagePropsType } from '@/types/PagePropsType';
import Header from '@/Components/Header.vue';
import Hero from '@/Components/Hero.vue';

const page = usePage<PagePropsType>();

const isHome = computed(() => page.props.ziggy?.current_route === 'home');
</script>