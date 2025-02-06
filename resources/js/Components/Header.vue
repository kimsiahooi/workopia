<template>
    <header class="bg-blue-900 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-3xl font-semibold">
                <Link :href="route('home')">Workopia</Link>
            </h1>
            <nav class="hidden md:flex items-center space-x-4">
                <NavLink :url="route('home')" :active="checkActiveRoute('home')">Home</NavLink>
                <NavLink :url="route('jobs.index')" :active="checkActiveRoute('jobs.index')">
                    All Jobs
                </NavLink>
                <a href="saved-jobs.html" class="text-white hover:underline py-2">Saved Jobs</a>
                <a href="login.html" class="text-white hover:underline py-2">Login</a>
                <a href="register.html" class="text-white hover:underline py-2">Register</a>
                <a href="dashboard.html" class="text-white hover:underline py-2">
                    <i class="fa fa-gauge mr-1"></i> Dashboard
                </a>
                <ButtonLink :url="route('jobs.create')" icon="edit">Create Job</ButtonLink>
            </nav>
            <button id="hamburger" class="text-white md:hidden flex items-center" @click="toggleMenu">
                <i class="fa fa-bars text-2xl"></i>
            </button>
        </div>
        <!-- Mobile Menu -->
        <nav id="mobile-menu"
            :class="`${!menuInOpen ? 'hidden' : ''} md:hidden bg-blue-900 text-white mt-5 pb-4 space-y-2`">
            <NavLink :url="route('jobs.index')" :active="checkActiveRoute('jobs.index')" mobile>
                All Jobs
            </NavLink>
            <NavLink url="saved-jobs.html" mobile>Saved Jobs</NavLink>
            <NavLink url="login.html" mobile>Login</NavLink>
            <NavLink url="register.html" mobile>Register</NavLink>
            <NavLink url="dashboard.html" mobile icon="gauge">Dashboard</NavLink>
            <ButtonLink :url="route('jobs.create')" icon="edit" block>Create Job</ButtonLink>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import { computed, ref } from 'vue'
import NavLink from './NavLink.vue';
import ButtonLink from './ButtonLink.vue';

const page = usePage<{
    ziggy?: {
        current_route: string
    }
}>()

const menuInOpen = ref(false);

const toggleMenu = () => {
    menuInOpen.value = !menuInOpen.value
}

const computedCurrentRoute = computed(() => page.props.ziggy?.current_route);

const checkActiveRoute = (routeName: string) => computedCurrentRoute.value === routeName
</script>