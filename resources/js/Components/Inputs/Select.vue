<template>
    <div class="mb-4">
        <label v-if="label" class="block text-gray-700" :for="id">
            {{ label }}
        </label>
        <select
            :id="id"
            :name="name"
            class="w-full px-4 py-2 border rounded focus:outline-none"
            :class="{
                'border-red-500': error,
            }"
            v-model="model"
        >
            <option
                v-for="option in options"
                :key="option.label"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
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
    error?: string;
    options: {
        label: string;
        value: string | number | boolean;
    }[];
}>();
</script>
