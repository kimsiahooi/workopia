<template>
    <Link v-if="!mobile" :href="url" class="text-white hover:underline py-2" :class="{
        'text-yellow-500 font-bold': active
    }">
    <i v-if="icon" :class="`fa fa-${icon} mr-1`"></i>
    <slot />
    </Link>
    <Link v-else :href="url" class="block px-4 py-2 hover:bg-blue-700" :class="{
        'text-yellow-500 font-bold': active
    }">
    <i v-if="icon" :class="`fa fa-${icon} mr-1`"></i>
    <slot />
    </Link>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
defineProps<{
    active?: boolean,
    url: string,
    icon?: string,
    mobile?: boolean
}>()
</script>