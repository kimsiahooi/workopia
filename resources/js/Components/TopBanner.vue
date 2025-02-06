<template>
    <section class="bg-blue-900 text-white py-6 text-center">
        <div class="container mx-auto">
            <h2 class="text-3xl font-semibold">
                {{ heading ?? 'Unlock Your Career Potential' }}
            </h2>
            <p class="text-lg mt-2">
                {{ subheading ?? 'Discover the perfect job opportunity for you.' }}
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    heading?: string,
    subheading?: string,
}>()
</script>