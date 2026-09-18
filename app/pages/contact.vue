<script setup lang="ts">
useSeoMeta({
    title: "Contact Favour Chibueze | Frontend Engineer & Software Developer",
    description: "Get in touch with Favour Chibueze for collaboration opportunities, project inquiries, or professional networking. Based in Munich, Germany and available for frontend development projects.",
    ogTitle: "Contact Favour Chibueze | Frontend Engineer & Software Developer",
    ogDescription: "Get in touch with Favour Chibueze for collaboration opportunities, project inquiries, or professional networking. Based in Munich, Germany.",
    ogImage: "https://favourchibueze.com/favour-chibueze.jpg",
    ogUrl: "https://favourchibueze.com/contact",
    twitterTitle: "Contact Favour Chibueze | Frontend Engineer & Software Developer",
    twitterDescription: "Get in touch with Favour Chibueze for collaboration opportunities, project inquiries, or professional networking.",
    twitterImage: "https://favourchibueze.com/favour-chibueze.jpg",
    twitterCard: "summary_large_image",
    keywords: 'contact favour chibueze, frontend engineer contact, software developer hire, munich developer contact, vue.js developer hire, react developer contact'
});

useHead({
    link: [
        { rel: "canonical", href: "https://favourchibueze.com/contact" }
    ]
});
</script>

<template>

    <section class="min-h-[calc(100vh-180px)]">
        <div class="container flex justify-center max-w-full items-center min-h-[calc(100vh-180px)] gap-10 py-8">
            <div class="flex w-[100%] max-w-none mx-auto flex-col justify-center items-start">
                <div class="lg:w-[86%] mx-auto self-center">
                    <h1
                        class="mb-5 text-4xl sm:text-5xl lg:text-[115px] leading-[105%] lg:leading-[100%] text-balance font-jubilat">
                        Let's create something amazing together.
                    </h1>
                    <div>
                        <p class="font-simula lg:text-2xl mt-3 text-center text-balance italic"> I'm always excited to
                            connect with like-minded individuals. </p>
                        <p class="font-simula lg:text-2xl mt-1 text-center text-balance italic">
                            Have an idea? Let's make magic together! Feel free to drop me a message. </p>
                    </div>

                    <p class="font-menlo lg:text-2xl mt-6 lg:text-right text-left text-balance">Thanks for stopping by
                        my corner of the web. I look forward to sharing more of my journey with you!</p>

                    <div class="flex flex-wrap gap-3 sm:gap-10 pt-8 justify-center sm:justify-end">
                        <a href="https://github.com/favour-chibueze" aria-label="GitHub profile"
                            class="inline-flex min-h-11 min-w-11 items-center justify-center">
                            <Icon name="mdi:github" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="https://www.linkedin.com/in/favourchibueze/" aria-label="LinkedIn profile"
                            class="inline-flex min-h-11 min-w-11 items-center justify-center">
                            <Icon name="mdi:linkedin" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="https://twitter.com/FavourChi__" aria-label="Twitter profile"
                            class="inline-flex min-h-11 min-w-11 items-center justify-center">
                            <Icon name="mdi:twitter" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="mailto:chibueze.favour.o@gmail.com" aria-label="Send email"
                            class="inline-flex min-h-11 min-w-11 items-center justify-center">
                            <Icon name="mdi:email" class="text-3xl cursor-pointer" />
                        </a>

                        <a href="https://favourchi.medium.com/" aria-label="Medium profile"
                            class="inline-flex min-h-11 min-w-11 items-center justify-center">
                            <Icon name="mdi:medium" class="text-3xl cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
