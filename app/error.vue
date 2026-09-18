<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: `${props.error.statusCode} | Favour Chibueze`,
  robots: 'noindex, follow',
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <section class="container mx-auto flex min-h-[calc(100vh-180px)] flex-col items-center justify-center py-8 text-center font-menlo">
    <h1 class="text-[5rem] lg:text-[10rem] leading-none font-jubilat">
      {{ error.statusCode || 500 }}
    </h1>
    <p class="mt-4 text-lg lg:text-2xl text-balance">
      {{ error.statusCode === 404 ? "This page doesn't exist." : 'Something went wrong.' }}
    </p>
    <button
      @click="handleError"
      class="mt-8 underline decoration-dashed underline-offset-4 text-lg cursor-pointer">
      Back to home
    </button>
  </section>
</template>
