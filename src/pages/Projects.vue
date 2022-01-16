<template>
  <Layout>
    <section class="mx-auto">
      <h1 class="text-5xl font-semibold text-gray-700 dark:text-white mb-4">
        Projects
      </h1>
      <h3 class="mb-10 font-light text-gray-500 dark:text-white transition-all">
        A collection of the frontend, backend and full stack javascript projects
        I've been working on.
      </h3>

      <h2 class="text-3xl font-semibold text-gray-700 dark:text-white mb-8">
        Recent Projects
      </h2>
      <ul
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto gap-8 mb-16"
      >
        <ProjectOverview
          v-for="project in $page.projects.edges"
          :key="project.path"
          :project="project"
          class="project"
        />
      </ul>
    </section>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject (sortBy: "date", order: DESC) {
    edges {
      node {
        title
        date (format: "MMMM D, Y")
        path
        siteLink
        githubLink
        summary
        highlights
        timeToRead
        image {
          path
          caption
          alt
        }
      }
    }
  }
}
</page-query>

<script>
import gsap from "gsap";
import ProjectOverview from "../components/ProjectOverview.vue";

export default {
  components: {
    ProjectOverview,
  },
  metaInfo: {
    title: "Projects",
  },
  mounted() {
    gsap.from(".project", {
      duration: 0.75,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: "power1",
      stagger: 0.25,
    });
  },
};
</script>
