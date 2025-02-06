<template>
    <Link :href="href" class="text-white hover:underline py-2" :class="{
        'text-yellow-500 font-bold': active
    }">
    <i v-if="icon" :class="`fa fa-${icon} mr-1`"></i>
    <slot />
    </Link>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
defineProps<{
    active: boolean,
    href: string,
    icon?: string
}>()
</script>