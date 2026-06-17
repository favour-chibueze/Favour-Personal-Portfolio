<script setup lang="ts">
useSeoMeta({
    title: "Experience & Career | Favour Chibueze - Frontend Engineer",
    description: "Explore Favour Chibueze's professional experience as a frontend engineer. Current role at Eden Life, previous work at Fuelmetrics, and open source contributions to Mautic and other projects.",
    ogTitle: "Experience & Career | Favour Chibueze - Frontend Engineer",
    ogDescription: "Explore Favour Chibueze's professional experience as a frontend engineer. Current role at Eden Life, previous work at Fuelmetrics, and open source contributions.",
    ogImage: "https://favourchibueze.com/favour-chibueze.jpg",
    ogUrl: "https://favourchibueze.com/experience",
    twitterTitle: "Experience & Career | Favour Chibueze - Frontend Engineer",
    twitterDescription: "Explore Favour Chibueze's professional experience as a frontend engineer. Current role at Eden Life, previous work at Fuelmetrics, and open source contributions.",
    twitterImage: "https://favourchibueze.com/favour-chibueze.jpg",
    twitterCard: "summary_large_image",
    keywords: 'favour chibueze experience, frontend engineer career, eden life, fuelmetrics, mautic, open source contributions, software engineer experience, munich developer'
});

useHead({
    link: [
        { rel: "canonical", href: "https://favourchibueze.com/experience" }
    ]
});

const experience = ref([
    {
        title: 'Frontend Engineer',
        company: 'JUMiNGO GmbH',
        link: 'http://jumingo.com/',
        date: 'Nov. 2025 - April 2026'
    },
    {
        title: 'Frontend Engineer',
        company: 'Eden Life',
        link: 'https://ouredenlife.com/',
        date: 'April 2022 - June 2025',
    },
    {
        title: 'Community Lead (Volunteer)',
        company: 'DevCareer Africa',
        link: 'https://devcareer.io/',
        date: 'Nov. 2021 - Present',
        status: 'active'
    },
    {
        title: 'Education Team Lead (open source)',
        company: 'Mautic',
        link: 'https://mautic.org/',
        date: 'Dec. 2024 - Dec. 2025'
    },
    {
        title: 'Board Member (open source)',
        company: 'Mautic',
        link: 'https://mautic.org/',
        date: 'Dec. 2023 - Dec. 2024'
    },
    {
        title: 'DPG Open Source Community Manager (Volunteer)',
        company: 'UNICEF(Oky)',
        link: 'https://okyapp.info/',
        date: 'Sept. 2024 - Dec. 2024'
    },
    {
        title: 'Technical Writer (Google Season of Docs)',
        company: 'Mautic',
        link: 'https://mautic.org/',
        date: 'June 2022 - Nov. 2022',
    },
    {
        title: 'Frontend Engineer',
        company: 'Fuelmetrics',
        link: 'https://www.epump.africa/',
        date: 'Feb. 2020 - March 2022'
    },

    {
        title: 'Community Manager (Volunteer)',
        company: 'She Code Africa',
        link: 'https://shecodeafrica.org/',
        date: 'May 2019 - Aug. 2021'
    },
])
</script>

<template>
    <section class="container mx-auto py-10 font-menlo">
        <div class="lg:w-8/12 w-full mx-auto font-menlo">
            <h1 class="text-xl lg:text-4xl font-bold mb-6 text-balance">
                A short summary of my career
            </h1>

            <div class="py-6 flex flex-col ">
                <div class="border-b border-gray-200 my-5 pb-5 flex flex-col gap-1.5 sm:flex-row sm:justify-between sm:items-center"
                    v-for="exp in experience" :key="exp.title + exp.date">
                    <div>
                        <h2 class="text-lg lg:text-2xl font-semibold pb-1 sm:pb-2.5">{{ exp.title }}</h2>
                        <a :href="exp.link" target="_blank" rel="noopener noreferrer" class="text-sm lg:text-xl hover:underline">{{ exp.company }}</a>
                    </div>
                    <p class="text-sm lg:text-xl whitespace-nowrap shrink-0 sm:text-right">
                        <span v-if="exp.status">●</span>
                        {{ exp.date }}
                    </p>
                </div>
            </div>

            <div class="cursor-pointer hover:underline text-right flex justify-end pb-10">
                <a href="https://www.linkedin.com/in/favourchibueze/" target="_blank" rel="noopener noreferrer"
                    class="flex items-center cursor-pointer gap-2">More places I've worked
                    <Icon name="mdi:arrow-down" class="text-2xl cursor-pointer" />
                </a>
            </div>
        </div>

    </section>
</template>
