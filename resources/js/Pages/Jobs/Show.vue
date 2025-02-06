<template>
    <h1>Show Job {{ id }}</h1>
</template>

<script setup lang="ts">
defineProps<{
    id: string
}>();
</script>