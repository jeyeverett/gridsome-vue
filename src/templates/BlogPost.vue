<template>
  <Layout>
    <h1 class="mb-2 text-4xl font-semibold text-gray-900 dark:text-gray-200">
      {{ $page.post.title }}
    </h1>
    <span class="mb-4 font-light text-gray-700 dark:text-gray-400">
      <em>
        <g-link :to="$page.post.author.path">
          {{ $page.post.author.title }}
        </g-link>
      </em>
    </span>
    <span class="mb-4 font-light text-gray-700 dark:text-gray-400">
      - {{ $page.post.date }}
    </span>
    <span class="mb-4 font-light text-gray-700 dark:text-gray-400">
      - {{ $page.post.timeToRead }} min read
    </span>
    <div class="flex flex-wrap mb-4 text-sm">
      <g-link
        v-for="tag in $page.post.tags"
        :key="tag.id"
        :to="tag.path"
        class="px-4 py-2 my-4 mr-4 font-semibold rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-300 hover:bg-gray-700 dark:hover:text-gray-700 dark:hover:bg-gray-300 transition-all"
      >
        {{ tag.title }}
      </g-link>
    </div>
    <figure v-if="$page.post.image" class="flex flex-col mb-5">
      <g-image
        :alt="$page.post.image.alt"
        :src="$page.post.image.path"
        class="mb-2 mx-auto"
      />
      <figcaption
        class="self-center font-light text-sm image-caption"
        v-html="$page.post.image.caption"
      />
    </figure>
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
            summary
            path
            timeToRead
            image {
              path
              caption
              alt
            }
            author {
              title
              path
            }
            tags {
              title
              path
            }
        }
    }
</page-query>

<script>
import PostSEO from "../mixins/PostSEO.vue";
export default {
  mixins: [PostSEO],
};
</script>
