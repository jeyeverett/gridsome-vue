<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-2">{{ $page.post.title }}</h1>
    <span class="font-light">{{ $page.post.date }}</span>
    <div class="flex flex-wrap mb-4 text-sm">
      <g-link
        v-for="tag in $page.post.tags"
        :key="tag.id"
        :to="tag.path"
        class="bg-gray-300 rounded-full px-3 py-2 mr-4 my-4 text-gray-700 hover:text-gray-300 hover:bg-gray-700"
        >{{ tag.title }}</g-link
      >
    </div>
    <div class="mt-8 mb-16 prose xl:prose-lg" v-html="$page.post.content" />
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
