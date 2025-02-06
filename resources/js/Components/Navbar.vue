<template>
    <nav>
        <Link :href="route('home')">Home</Link>
        <Link :href="route('jobs.index')">Jobs</Link>
        <Link :href="route('jobs.create')">Create Job</Link>
    </nav>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
</script>