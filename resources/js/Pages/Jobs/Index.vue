<template>

    <Head title="Job Listings" />
    <div>
        <h1>Available Jobs</h1>
        <ul v-if="jobs.length">
            <li v-for="job in jobs" :key="job">{{ job }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

defineProps<{
    jobs: string[]
}>()
</script>