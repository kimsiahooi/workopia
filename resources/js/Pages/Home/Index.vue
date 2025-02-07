<template>
    <h2 class="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">Welcome To Workopia</h2>

    <div v-if="jobs.length" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <template v-for="job in jobs" :key="job">
            <JobCard :job="job" />
        </template>
    </div>
    <p v-else>No jobs available</p>

    <Link :href="route('jobs.index')" class="block text-xl text-center">
    <i class="fa fa-arrow-alt-circle-right"></i> Show All Jobs
    </Link>

    <BottomBanner />
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js'
import type { JobType } from '@/Types/JobType';
import BottomBanner from '@/Components/BottomBanner.vue';
import JobCard from '@/Components/JobCard.vue';

defineProps<{
    jobs: JobType[]
}>()
</script>
