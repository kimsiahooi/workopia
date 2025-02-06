<template>
    <Head title="Job Listings" />

    <div v-if="jobs.length" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <template v-for="job in jobs" :key="job">
            <JobCard :job="job" />
        </template>
    </div>
    <p v-else>No jobs available</p>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import type { JobType } from '@/Types/JobType';
import JobCard from '@/Components/JobCard.vue'

defineProps<{
    jobs: JobType[]
}>()
</script>