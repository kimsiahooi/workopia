<template>
    <h1 class="text-2xl">{{ job.title }}</h1>
    <p>{{ job.description }}</p>
</template>

<script setup lang="ts">
import type { JobType } from '@/Types/JobType'

defineProps<{
    job: JobType
}>();
</script>