<template>
  <Layout>
    <p
      class="uppercase tracking-wider text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition-all"
    >
      Projects
    </p>
    <h1
      class="mb-6 text-4xl font-semibold text-gray-700 dark:text-gray-200 transition-all"
    >
      {{ $page.project.title }}
    </h1>
    <div
      class="flex items-start sm:items-center font-light text-gray-500 dark:text-gray-400 mb-10"
    >
      <g-image
        alt="Jeysen Freedman"
        src="../../content/media/jeysen-freedman.jpg"
        class="rounded-full w-8 sm:w-10 mr-3"
      />
      <span class="flex-col sm:flex-row">
        <g-link
          to="/author/jeysen-freedman"
          class="hover:text-gray-700 dark:hover:text-gray-300 transition-all"
        >
          Jeysen Freedman
        </g-link>
        <span class="block sm:inline">
          <span class="hidden sm:inline sm:mx-4">&nbsp;|</span>
          {{ $page.project.date }}
        </span>
        <span class="block sm:inline">
          <span class="hidden sm:inline sm:mx-4">&nbsp;|</span>
          {{ $page.project.timeToRead }} min read
        </span>
      </span>
    </div>

    <figure v-if="$page.project.image" class="flex flex-col mb-4 sm:mb-8">
      <g-image
        :alt="$page.project.image.alt"
        :src="$page.project.image.path"
        height="400"
        width="600"
        class="mb-2 mx-auto w-3/4 object-fit object-center"
      />
      <figcaption
        class="self-center font-light text-sm image-caption"
        v-html="$page.project.image.caption"
      />
    </figure>

    <article
      id="project-content"
      class="mb-16 md:px-2 xl:px-4 mx-auto prose dark:prose-light lg:prose-lg xl:prose-xl"
      v-html="$page.project.content"
    />
    <div
      class="min-w-0 flex items-start font-light text-gray-500 dark:text-gray-400 pb-10 border-b border-gray-200"
    >
      <g-image
        alt="Jeysen Freedman"
        src="../../content/media/jeysen-freedman.jpg"
        class="rounded-full w-10 mr-3"
      />
      <div class="flex-col">
        <span
          class="block text-sm uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-400"
        >
          created by
        </span>
        <g-link
          to="/author/jeysen-freedman"
          class="text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-300 transition-all"
        >
          Jeysen Freedman
        </g-link>
      </div>
    </div>
    <div class="flex flex-wrap mt-10 text-sm">
      <g-link
        v-for="tag in $page.project.tags"
        :key="tag.id"
        :to="tag.path"
        class="px-4 py-2 my-4 mr-4 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-300 hover:bg-gray-700 dark:hover:text-gray-700 dark:hover:bg-gray-300 transition-all"
      >
        {{ tag.title }}
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
  query Project ($path: String!) {
    project: project(path: $path) {
      title
      date (format: "MMMM D, Y")
      content
      summary
      highlights
      path
      siteLink
      githubLink
      timeToRead
      image {
        path
        caption
        alt
      }
      tags {
        title
        path
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Project: " + this.$page.project.title,
    };
  },
};
</script>
