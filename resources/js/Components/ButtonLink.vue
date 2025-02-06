<template>
    <Link :href="url"
        :class="`${bgClass ?? 'bg-yellow-500'} ${hoverClass ?? 'hover:bg-yellow-600'} ${textClass ?? 'text-black'} px-4 py-2 rounded hover:shadow-md transition duration-300`">
    <i v-if="icon" :class="`fa fa-${icon} mr-1`"></i>
    <slot />
    </Link>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
defineProps<{
    url: string,
    icon?: string,
    bgClass?: string,
    hoverClass?: string,
    textClass?: string,
}>()
</script>