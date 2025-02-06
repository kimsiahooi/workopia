<template>
    <Navbar />
    <main class="container mx-auto p-4 mt-4">
        <slot />
    </main>
</template>

<script setup lang="ts">
import Navbar from '@/Components/Navbar.vue';
</script>