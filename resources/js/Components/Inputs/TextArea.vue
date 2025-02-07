<template>
    <div class="mb-4">
        <label v-if="label" class="block text-gray-700" :for="id">
            {{ label }}
        </label>
        <textarea
            :id="id"
            :name="name"
            class="w-full px-4 py-2 border rounded focus:outline-none"
            :class="{
                'border-red-500': error,
            }"
            :placeholder="placeholder"
            v-model="model"
            :cols="cols"
            :rows="rows"
        />
        <p v-if="error" class="text-red-500 text-sm mt-1">
            {{ error }}
        </p>
    </div>
</template>

<script setup lang="ts">
const model = defineModel<string>();

defineProps<{
    id: string;
    name: string;
    label?: string;
    error?: string;
    placeholder?: string;
    cols?: number | string;
    rows?: number | string;
}>();
</script>
