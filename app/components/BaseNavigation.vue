<script setup lang="ts">
const colorMode = useColorMode()

const isOpen = ref(false);

const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

useHead({
    bodyAttrs: {
        class: "bg-white text-slate-900 dark:bg-[#1d1f20] dark:text-[#c8c9cb]"
    }
})
</script>


<template>
    <nav class="w-full transition-all bg-white dark:bg-[#1d1f20] relative z-50">
        <div class="container mx-auto flex justify-between items-center py-6 px-4">
            <!-- Logo -->
            <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white">
                <h1
                    class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 dark:before:bg-white before:bg-black">
                    <span class="relative text-white dark:text-gray-950">FC</span>
                </h1>
            </NuxtLink>

            <!-- Desktop Navigation -->
            <ul class="hidden md:flex space-x-6">
                <li><NuxtLink to="/" class="nav-link hover:underline">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="nav-link hover:underline">About</NuxtLink></li>
                <li><NuxtLink to="/experience" class="nav-link hover:underline">Experience</NuxtLink></li>
                <li><NuxtLink to="/contact" class="nav-link hover:underline">Contact</NuxtLink></li>
                <li>
                    <button @click="toggleColorMode" class="rounded-md" title="Toggle Dark Mode">
                        <Icon
                            :name="colorMode.preference === 'dark' ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny'"
                            class="text-2xl text-gray-900 dark:text-white" />
                    </button>
                </li>
            </ul>

            <!-- Mobile Menu Button -->
            <button @click="toggleMenu" class="md:hidden focus:outline-none" :aria-label="isOpen ? 'Close menu' : 'Open menu'"
                :aria-expanded="isOpen" aria-controls="mobile-menu">
                <Icon :name="isOpen ? 'mdi:close' : 'mdi:menu'" class="text-3xl text-gray-900 dark:text-white" />
            </button>
        </div>

        <!-- Mobile Dropdown -->
        <div v-show="isOpen" id="mobile-menu"
            class="md:hidden absolute top-full left-0 right-0 z-50 bg-white dark:bg-[#1d1f20] shadow-lg border-t border-gray-100 dark:border-gray-800 transition-all">
            <ul class="flex flex-col items-center space-y-4 py-4">
                <li><NuxtLink to="/" class="nav-link" @click="isOpen = false">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="nav-link" @click="isOpen = false">About</NuxtLink></li>
                <li><NuxtLink to="/experience" class="nav-link" @click="isOpen = false">Experience</NuxtLink></li>
                <li><NuxtLink to="/contact" class="nav-link" @click="isOpen = false">Contact</NuxtLink></li>
                <li>
                    <button @click="toggleColorMode" class="rounded-md" title="Toggle Dark Mode">
                        <Icon
                            :name="colorMode.preference === 'dark' ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny'"
                            class="text-2xl text-gray-900 dark:text-white" />
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>