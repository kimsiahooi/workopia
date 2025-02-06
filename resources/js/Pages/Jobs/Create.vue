<template>
    <h1>Create New Job</h1>
    <form @submit.prevent="store">
        <div class="my-5">
            <input type="text" placeholder="title" v-model="form.title" />
            <div v-if="form.errors.title" class="text-red-500 mt-2 text-sm">{{ form.errors.title }}</div>
        </div>
        <div class="mb-5">
            <input type="text" placeholder="description" v-model="form.description" />
            <div v-if="form.errors.description" class="text-red-500 mt-2 text-sm">{{ form.errors.description }}</div>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    title: '',
    description: ''
})

const store = () => form.post('/jobs')
</script>