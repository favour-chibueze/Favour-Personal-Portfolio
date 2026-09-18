<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()

const isOpen = ref(false)
const mobileMenuRef = ref<HTMLElement | null>(null)

const toggleColorMode = () => {
    colorMode.preference =
        colorMode.value === 'dark' ? 'light' : 'dark'
}

const handleMenuToggle = () => {
    isOpen.value =
        mobileMenuRef.value?.matches(':popover-open') ?? false
}

const closeMobileMenu = () => {
    if (isOpen.value) {
        mobileMenuRef.value?.hidePopover()
    }
}

watch(
    () => route.fullPath,
    closeMobileMenu
)

useHead({
    bodyAttrs: {
        class:
            'bg-white text-slate-900 dark:bg-[#1d1f20] dark:text-[#c8c9cb]'
    }
})
</script>

<template>
    <nav class="relative z-50 w-full bg-white transition-all dark:bg-[#1d1f20]" aria-label="Main navigation">
        <div class="container mx-auto flex items-center justify-between px-4 py-6">
            <!-- Logo -->
            <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white" aria-label="FC — Home">
                <span
                    class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-black dark:before:bg-white">
                    <span class="relative text-white dark:text-gray-950">
                        FC
                    </span>
                </span>
            </NuxtLink>

            <!-- Desktop Navigation -->
            <ul class="hidden items-center space-x-6 md:flex">
                <li>
                    <NuxtLink to="/" class="hover:underline">
                        Home
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/about" class="hover:underline">
                        About
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/experience" class="hover:underline">
                        Experience
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/contact" class="hover:underline">
                        Contact
                    </NuxtLink>
                </li>

                <!-- Desktop Theme Toggle -->
                <li>
                    <ColorScheme tag="span">
                        <button type="button"
                            class="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 dark:focus-visible:outline-white"
                            :aria-label="colorMode.value === 'dark'
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                                " @click="toggleColorMode">
                            <Icon :name="colorMode.value === 'dark'
                                ? 'mdi:white-balance-sunny'
                                : 'mdi:moon-waning-crescent'
                                " class="text-2xl text-gray-900 dark:text-white" aria-hidden="true" />
                        </button>

                        <template #placeholder>
                            <span class="inline-block size-6" aria-hidden="true" />
                        </template>
                    </ColorScheme>
                </li>
            </ul>

            <!-- Mobile Menu Button -->
            <button type="button" popovertarget="mobile-menu"
                class="md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 dark:focus-visible:outline-white"
                :aria-label="isOpen ? 'Close menu' : 'Open menu'" :aria-expanded="isOpen" aria-controls="mobile-menu">
                <Icon :name="isOpen ? 'mdi:close' : 'mdi:menu'" class="text-3xl text-gray-900 dark:text-white"
                    aria-hidden="true" />
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" ref="mobileMenuRef" popover="auto"
            class="absolute left-0 right-0 top-full z-50 w-full border-t border-gray-100 bg-white text-gray-900 shadow-lg transition-all dark:border-gray-800 dark:bg-[#1d1f20] dark:text-white md:hidden"
            @toggle="handleMenuToggle">
            <ul class="flex flex-col items-center space-y-4 py-4">
                <li>
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/about">
                        About
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/experience">
                        Experience
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/contact">
                        Contact
                    </NuxtLink>
                </li>

                <!-- Mobile Theme Toggle -->
                <li>
                    <ColorScheme tag="span">
                        <button type="button"
                            class="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 dark:focus-visible:outline-white"
                            :aria-label="colorMode.value === 'dark'
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                                " @click="toggleColorMode">
                            <Icon :name="colorMode.value === 'dark'
                                ? 'mdi:white-balance-sunny'
                                : 'mdi:moon-waning-crescent'
                                " class="text-2xl text-gray-900 dark:text-white" aria-hidden="true" />
                        </button>

                        <template #placeholder>
                            <span class="inline-block size-6" aria-hidden="true" />
                        </template>
                    </ColorScheme>
                </li>
            </ul>
        </div>
    </nav>
</template>