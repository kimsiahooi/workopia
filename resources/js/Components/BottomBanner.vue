<template>
    <section class="container mx-auto my-6">
        <div class="bg-blue-800 text-white rounded p-4 flex items-center justify-between flex-col md:flex-row gap-4">
            <div>
                <h2 class="text-xl font-semibold">{{ heading ?? 'Looking to hire?' }}</h2>
                <p class="text-gray-200 text-lg mt-2">
                    {{ subheading ?? 'Post your job listing now and find the perfect candidate.' }}
                </p>
            </div>
            <ButtonLink :url="route('jobs.create')" icon="edit">Create Job</ButtonLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { route } from 'ziggy-js'
import ButtonLink from './ButtonLink.vue';

defineProps<{
    heading?: string,
    subheading?: string,
}>()
</script>