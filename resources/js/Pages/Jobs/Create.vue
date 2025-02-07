<template>
    <div class="bg-white mx-auto p-8 rounded-lg shadow-md w-full md:max-w-3xl">
        <h2 class="text-4xl text-center font-bold mb-4">Create Job Listing</h2>
        <form @submit.prevent="store">
            <h2 class="text-2xl font-bold mb-6 text-center text-gray-500">
                Job Info
            </h2>

            <div class="mb-4">
                <Text
                    v-model="form.title"
                    id="title"
                    name="title"
                    label="Job Title"
                    :error="form.errors.title"
                    placeholder="Software Engineer"
                />

                <label class="block text-gray-700" for="description">
                    Job Description
                </label>
                <textarea
                    cols="30"
                    rows="7"
                    id="description"
                    name="description"
                    class="w-full px-4 py-2 border rounded focus:outline-none"
                    :class="{
                        'border-red-500': form.errors.title,
                    }"
                    placeholder="We are seeking a skilled and motivated Software Developer to join our growing development team..."
                    v-model="form.description"
                ></textarea>
                <p
                    v-if="form.errors.description"
                    class="text-red-500 text-sm mt-1"
                >
                    {{ form.errors.description }}
                </p>
            </div>

            <Text
                v-model.number="form.salary"
                id="salary"
                type="number"
                name="salary"
                label="Annual Salary"
                :error="form.errors.salary"
                placeholder="90000"
            />

            <div class="mb-4">
                <label class="block text-gray-700" for="requirements">
                    Requirements
                </label>
                <textarea
                    id="requirements"
                    name="requirements"
                    class="w-full px-4 py-2 border rounded focus:outline-none"
                    placeholder="Bachelor's degree in Computer Science"
                ></textarea>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700" for="benefits">
                    Benefits
                </label>
                <textarea
                    id="benefits"
                    name="benefits"
                    class="w-full px-4 py-2 border rounded focus:outline-none"
                    placeholder="Health insurance, 401k, paid time off"
                ></textarea>
            </div>

            <Text
                v-model="form.tags"
                id="tags"
                name="tags"
                label="Tags (comma-separated)"
                :error="form.errors.tags"
                placeholder="development,coding,java,python"
            />

            <div class="mb-4">
                <label class="block text-gray-700" for="job_type">
                    Job Type
                </label>
                <select
                    id="job_type"
                    name="job_type"
                    class="w-full px-4 py-2 border rounded focus:outline-none"
                    :class="{
                        'border-red-500': form.errors.job_type,
                    }"
                    v-model="form.job_type"
                >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Internship">Internship</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="On-Call">On-Call</option>
                </select>
                <p
                    v-if="form.errors.job_type"
                    class="text-red-500 text-sm mt-1"
                >
                    {{ form.errors.job_type }}
                </p>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700" for="remote">Remote</label>
                <select
                    id="remote"
                    name="remote"
                    class="w-full px-4 py-2 border rounded focus:outline-none"
                >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </div>

            <Text
                v-model="form.address"
                id="address"
                name="address"
                label="Address"
                :error="form.errors.address"
                placeholder="123 Main St"
            />

            <Text
                v-model="form.city"
                id="city"
                name="city"
                label="City"
                :error="form.errors.city"
                placeholder="Albany"
            />

            <Text
                v-model="form.state"
                id="state"
                name="state"
                label="State"
                :error="form.errors.state"
                placeholder="NY"
            />

            <Text
                v-model="form.zipcode"
                id="zipcode"
                name="zipcode"
                label="ZIP Code"
                :error="form.errors.zipcode"
                placeholder="12201"
            />

            <h2 class="text-2xl font-bold mb-6 text-center text-gray-500">
                Company Info
            </h2>

            <Text
                v-model="form.company_name"
                id="company_name"
                name="company_name"
                label="Company Name"
                :error="form.errors.company_name"
                placeholder="Company name"
            />

            <div class="mb-4">
                <label class="block text-gray-700" for="company_description">
                    Company Description
                </label>
                <textarea
                    id="company_description"
                    name="company_description"
                    class="w-full px-4 py-2 border rounded focus:outline-none"
                    placeholder="Company Description"
                ></textarea>
            </div>

            <Text
                v-model="form.company_website"
                id="company_website"
                name="company_website"
                label="Company Website"
                :error="form.errors.company_website"
                placeholder="Enter website"
            />

            <Text
                v-model="form.contact_phone"
                id="contact_phone"
                name="contact_phone"
                label="Contact Phone"
                :error="form.errors.contact_phone"
                placeholder="Enter phone"
            />

            <Text
                v-model="form.contact_email"
                id="contact_email"
                type="email"
                name="contact_email"
                label="Contact Email"
                :error="form.errors.contact_email"
                placeholder="Email where you want to receive applications"
            />

            <Text
                v-model="form.company_logo"
                id="company_logo"
                type="file"
                name="company_logo"
                label="Company Logo"
                :error="form.errors.company_logo"
                ref="company-logo"
                @change="changeLogoHandler"
            />

            <button
                type="submit"
                class="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-3 rounded focus:outline-none"
            >
                Save
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";
import { useTemplateRef } from "vue";
import Text from "@/Components/Inputs/Text.vue";

const companyLogo = useTemplateRef<HTMLInputElement>("company-logo");

const form = useForm<{
    title: string;
    description: string;
    salary: number;
    tags: string;
    job_type:
        | "Full-Time"
        | "Part-Time"
        | "Contract"
        | "Temporary"
        | "Internship"
        | "Volunteer"
        | "On-Call";
    remote: boolean;
    requirements: string;
    benefits: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    contact_email: string;
    contact_phone: string;
    company_name: string;
    company_description: string;
    company_logo: File;
    company_website: string;
}>({
    title: "",
    description: "",
    salary: null,
    tags: "",
    job_type: "Full-Time",
    remote: false,
    requirements: "",
    benefits: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    contact_email: "",
    contact_phone: "",
    company_name: "",
    company_description: "",
    company_logo: null,
    company_website: "",
});

const changeLogoHandler = () => {
    form.company_logo = companyLogo.value.files[0];
};

const store = () => form.post("/jobs");
</script>
