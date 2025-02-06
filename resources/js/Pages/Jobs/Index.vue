<template>
    <Head title="Job Listings" />
    <h1>Available Jobs</h1>
    <ul>
        <li v-if="jobs.length" v-for="job in jobs" :key="job.title">
            <Link :href="route('jobs.show', job.id)">
            {{ job.title }} - {{ job.description }}
            </Link>
        </li>
        <li v-else>No jobs available</li>
    </ul>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import type { JobType } from '@/Types/JobType'

defineProps<{
    jobs: JobType[]
}>()
</script>