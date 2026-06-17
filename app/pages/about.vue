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
    <section class="container mx-auto py-10 font-menlo">
        <div class="lg:w-8/12 w-full flex flex-col mx-auto font-menlo">
            <h1 class="text-xl lg:text-2xl font-bold mb-6 text-balance">
                About Me
            </h1>

            <h2 class="text-2xl mb-2">Hi, I'm Favour! 👋</h2>
            <p class="text-sm leading-6 mt-4">
                I am passionate about building modern, user-friendly, and accessible web applications that provide
                exceptional user experiences. I thrive on ideas that drive positive impact and enjoy turning those ideas
                into well-crafted digital products. Over the years, I have worked on various projects, delivering
                high-quality solutions that enhance user engagement and business growth.
            </p>
            <p class="text-sm leading-6 mt-4">
                With over six years of experience in dynamic and collaborative environments, I have developed solutions
                across fintech, energy, e-commerce and service delivery industries. I thrive on transforming ideas into products
                that people love to use, ensuring they are highly functional, thoughtfully designed, and optimized for a
                seamless user experience.
            </p>

            <h2 class="border-b border-gray-200 mt-8 mb-3 text-2xl font-semibold">
                My Work & Open Source Contributions
            </h2>

            <p class="text-sm leading-6 mt-4">
                I currently work with <a href="https://ouredenlife.com/" target="_blank" rel="noopener noreferrer"
                    class="dark:text-white font-bold">Eden Life</a>, a tech-driven service company, where I help in
                simplifying everyday living by putting basic home needs on autopilot. My role focuses on enhancing
                digital products by optimizing SEO strategies, lead generation, and user experience across all web
                platforms, including CRM systems. I also develop responsive and scalable frontend applications that
                drive customer engagement and improve overall usability.
            </p>

            <p class="text-sm leading-6 mt-4">
                Beyond my professional work, I am deeply involved in open source. As an Education Team Lead at <a
                    href="https://www.mautic.org/" target="_blank" rel="noopener noreferrer" class="dark:text-white font-bold">Mautic </a>, I play a
                key role in onboarding contributors, organizing Hacktoberfest initiatives, and leading education team's
                efforts. I was also elected to the inaugural Mautic Council, where I contributed to the project's
                governance, strategic growth, and community expansion.
                <span class="dark:text-white font-bold"> 
                    <a href="https://docs.google.com/document/d/1Zq39d8gFG83vFrD6urP2nF5b1Y0JgRFsrtaadTS8Irc/" target="_blank" rel="noopener noreferrer" class="underline decoration-dashed">Take a look at my Resume
                    </a>
                </span>


            </p>

            <h3 class="border-b border-gray-200 mt-8 mb-3 text-2xl font-semibold">
                A Little More About Me
            </h3>

            <p class="text-sm leading-6 mt-4">
                When I'm not coding, you can find me engaging in activities that bring me joy. I enjoy reading, writing,
                exploring new places, and working out at the gym. I am also a huge fan of music, movies, and TV shows. I
                love to travel and experience different cultures, and I am always on the lookout for new adventures.
                <br />
                Additionally, I am passionate about:
            </p>
            <ul class="text-sm list-inside list-disc pl-4 leading-6 mt-4" role="list">
                <li class="mb-2">
                    <strong class="font-semibold"> Community Building & Advocacy -</strong>
                    I also enjoy building developer communities that foster growth, learning, and collaboration.
                </li>

                <li class="mb-2">
                    <strong class="font-semibold">
                        Writing -
                    </strong>
                    I create clear and engaging content to simplify complex topics, including documentation, blog posts,
                    and tutorials. <a
                        href="https://www.notion.so/favour-chibueze/FAVOUR-CHIBUEZE-WRITING-PORTFOLIO-14d23431327080f9ab4dfa245cb0a126"
                        target="_blank" rel="noopener noreferrer" class="dark:text-white font-bold underline decoration-dashed">Check out my writing portfolio here</a>.
                </li>

                <li class="mb-2">
                    <strong class="font-semibold"> Open Source Contributions -</strong> I am passionate about
                    contributing to open source projects, especially those that focus on community growth and education.
                </li>

                <li class="mb-2">
                   <strong class="font-semibold"> Volunteering </strong> – Giving back is important to me. I've volunteered with organizations that empower underrepresented groups in tech, support open knowledge, and create opportunities for new developers to grow.
                   <a href="https://www.linkedin.com/in/favourchibueze/details/volunteering-experiences/" target="_blank" rel="noopener noreferrer" class="dark:text-white font-bold underline decoration-dashed">
                    See my volunteering work here.
                   </a>
                </li>
            </ul>
        </div>

    </section>
</template>
