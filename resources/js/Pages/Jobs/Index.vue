<template>
    <Head title="Job Listings" />
    <h1>Available Jobs</h1>
    <ul>
        <li v-if="jobs.length" v-for="job in jobs" :key="job.title">{{ job.title }}</li>
        <li v-else>No jobs available</li>
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