<template>
    <div class="mb-4">
        <label v-if="label" class="block text-gray-700" :for="id">
            {{ label }}
        </label>
        <input
            :id="id"
            :type="type || 'text'"
            :name="name"
            class="w-full px-4 py-2 border rounded focus:outline-none"
            :class="{
                'border-red-500': error,
            }"
            :placeholder="placeholder || ''"
            v-model="model"
        />
        <p v-if="error" class="text-red-500 text-sm mt-1">
            {{ error }}
        </p>
    </div>
</template>

<script setup lang="ts">
const model = defineModel();

defineProps<{
    id: string;
    name: string;
    label?: string;
    type?: "text" | "number" | "file" | "checkbox" | "radio" | "tel" | "email";
    error?: string;
    placeholder?: string;
}>();
</script>
