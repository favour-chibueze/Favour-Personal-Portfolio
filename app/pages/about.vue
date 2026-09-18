<script setup lang="ts">
useSeoMeta({
    title: "About | Favour Chibueze - Frontend Engineer",
    description: "Learn about Favour Chibueze, a frontend engineer with 5+ years of experience across fintech, energy, e-commerce and service delivery. Currently at Eden Life and an active open source contributor and Education Team Lead at Mautic.",
    ogTitle: "About | Favour Chibueze - Frontend Engineer",
    ogDescription: "Learn about Favour Chibueze, a frontend engineer with 5+ years of experience across fintech, energy, e-commerce and service delivery. Active open source contributor at Mautic.",
    ogImage: "https://favourchibueze.com/favour-chibueze.jpg",
    ogUrl: "https://favourchibueze.com/about",
    twitterTitle: "About | Favour Chibueze - Frontend Engineer",
    twitterDescription: "Learn about Favour Chibueze, a frontend engineer with 6+ years of experience and an active open source contributor at Mautic.",
    twitterImage: "https://favourchibueze.com/favour-chibueze.jpg",
    twitterCard: "summary_large_image",
    keywords: 'about favour chibueze, frontend engineer, mautic, eden life, open source contributor, munich developer, vue developer, software engineer biography'
});

useHead({
    link: [
        { rel: "canonical", href: "https://favourchibueze.com/about" }
    ]
});
</script>

<template>
    <main class="container mx-auto py-10 font-menlo">
        <div class="lg:w-8/12 w-full flex flex-col mx-auto font-menlo">
            <h1 class="text-xl lg:text-2xl font-bold mb-6 text-balance">
                About Me
            </h1>

            <h2 class="text-2xl mb-2">Hi, I'm Favour! 👋</h2>
            <p class="text-sm leading-6 mt-4">
                I'm a Frontend Engineer with over six years of experience building and improving production web
                applications across logistics, fintech, energy, e-commerce, and service delivery.
            </p>
            <p class="text-sm leading-6 mt-4">
                I specialize in TypeScript and modern frontend development, with deep production experience in Vue
                and Nuxt. My work includes building customer-facing products, improving complex user journeys,
                running frontend experiments, implementing multilingual experiences, and creating accessible,
                responsive interfaces. I care about the details that turn a feature that simply works into one that
                works well for the people using it.
            </p>
            <p class="text-sm leading-6 mt-4">
                Throughout my career, I've worked closely with product, design, backend, QA, and other engineering
                teams to take ideas from requirements to production. I enjoy solving frontend problems that sit at
                the intersection of user experience, product goals, and maintainable engineering.
            </p>

            <h2 class="border-b border-gray-200 mt-8 mb-3 text-2xl font-semibold">
                My Work & Open Source Contributions
            </h2>

            <p class="text-sm leading-6 mt-4">
                Most recently, I worked as a Frontend Software Engineer at <span
                    class="dark:text-white font-bold">JUMiNGO GmbH</span>,
                where I built and improved customer-facing logistics products with Vue 3, Nuxt, TypeScript, and
                Pinia. My work included checkout and order flows, international shipping features, multilingual
                experiences, analytics, and A/B experiments. I also worked across shared product surfaces to improve
                consistency and make complex shipping workflows easier for customers to navigate.
            </p>

            <p class="text-sm leading-6 mt-4">
                Before JUMiNGO GmbH, I spent over three years at <a href="https://ouredenlife.com/" target="_blank"
                    rel="noopener noreferrer" class="dark:text-white font-bold">Eden Life</a>, building and improving
                customer-facing products
                and internal systems. My work ranged from marketplace and CRM features to website redesign,
                alongside improvements to performance, SEO, customer journeys, and the overall frontend experience.
                <span class="dark:text-white font-bold">
                    <a href="https://docs.google.com/document/d/1Zq39d8gFG83vFrD6urP2nF5b1Y0JgRFsrtaadTS8Irc/"
                        target="_blank" rel="noopener noreferrer" class="underline decoration-dashed">Take a look at my
                        Resume
                    </a>
                </span>
            </p>

            <p class="text-sm leading-6 mt-4">
                Beyond my professional work, I'm deeply involved in open source. I contribute to <a
                    href="https://www.mautic.org/" target="_blank" rel="noopener noreferrer"
                    class="dark:text-white font-bold">Mautic </a>, where I previously served as Education Team Lead —
                helping onboard contributors, organize Hacktoberfest initiatives, and lead efforts that made
                contributing to the project more approachable. I was also elected to the inaugural Mautic Council, where
                I contributed to the project's governance, strategic growth, and community development.
            </p>

            <h2 class="border-b border-gray-200 mt-8 mb-3 text-2xl font-semibold">
                Beyond the Code
            </h2>

            <p class="text-sm leading-6 mt-4">
                When I'm not coding, I enjoy reading, writing, working out, exploring new places, and experiencing
                different cultures. I'm also a big fan of music, movies, and TV shows.
                <br />
                A few other things that matter to me:
            </p>
            <ul class="text-sm list-inside list-disc pl-4 leading-6 mt-4" role="list">
                <li class="mb-2">
                    <strong class="font-semibold">Community Building & Advocacy —</strong>
                    I've spent years helping build developer communities where people can learn, collaborate,
                    contribute, and find opportunities to grow.
                </li>

                <li class="mb-2">
                    <strong class="font-semibold">
                        Writing —
                    </strong>
                    I enjoy making technical ideas easier to understand through documentation, articles, and
                    tutorials.
                    <a href="https://www.notion.so/favour-chibueze/FAVOUR-CHIBUEZE-WRITING-PORTFOLIO-14d23431327080f9ab4dfa245cb0a126"
                        target="_blank" rel="noopener noreferrer" class="dark:text-white font-bold underline
                    decoration-dashed">Check out my writing portfolio here</a>.
                </li>

                <li class="mb-2">
                    <strong class="font-semibold">Volunteering —</strong> I've volunteered with organizations supporting
                    underrepresented groups in technology, open knowledge, and developers entering the industry.
                    <a href="https://www.linkedin.com/in/favourchibueze/details/volunteering-experiences/"
                        target="_blank" rel="noopener noreferrer"
                        class="dark:text-white font-bold underline decoration-dashed">
                        See my volunteering work here.
                    </a>
                </li>
            </ul>
        </div>
    </main>
</template>
