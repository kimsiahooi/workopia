<template>
    <Head title="Job Listings" />
    <h1>Available Jobs</h1>
    <ul v-if="jobs.length">
        <li v-for="job in jobs" :key="job.title">{{ job.title }}</li>
    </ul>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

defineProps<{
    jobs: {
        title: string
    }[]
}>()
</script>