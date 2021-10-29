<template>
  <Layout>
    <h1 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-200">
      {{ $page.post.title }}
    </h1>
    <span class="mb-4 font-light text-gray-700 dark:text-gray-400">{{
      $page.post.date
    }}</span>
    <div class="flex flex-wrap mb-4 text-sm">
      <g-link
        v-for="tag in $page.post.tags"
        :key="tag.id"
        :to="tag.path"
        class="px-2 py-1 my-4 mr-4 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-300 hover:bg-gray-700 dark:hover:text-gray-700 dark:hover:bg-gray-300 transition-all"
      >
        {{ tag.title }}
      </g-link>
    </div>
    <div
      class="mb-16 prose dark:prose-light lg:prose-lg xl:prose-xl"
      v-html="$page.post.content"
    />
  </Layout>
</template>

<page-query>
    query Post ($path: String!) {
        post: blogPost(path: $path) {
            title
            date (format: "MMMM D, Y")
            content
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
      title: this.$page.post.title,
    };
  },
};
</script>
