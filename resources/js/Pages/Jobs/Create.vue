<template>
    <h1>Create New Job</h1>
    <form @submit.prevent="store">
        <input type="text" placeholder="title" v-model="form.title" />
        <input type="text" placeholder="description" v-model="form.description" />
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