<template>
  <Layout>
    <g-link :to="seriesOverviewLink">
      <span class="uppercase tracking-wider text-gray-500 dark:text-gray-200">
        {{ seriesOverviewName }}
      </span>
    </g-link>
    <h1
      class="mb-6 text-4xl font-semibold text-gray-900 dark:text-gray-200 transition-all"
    >
      {{ $page.post.title }}
    </h1>
    <div
      class="flex items-center font-light text-gray-500 dark:text-gray-400 mb-10"
    >
      <g-image
        :alt="authorName"
        :src="$page.post.author.title.image"
        class="rounded-full w-10 mr-3"
      />
      <span>
        <g-link :to="$page.post.author.path">
          {{ authorName }}
        </g-link>
      </span>
      <span>
        <span class="mx-4">&nbsp;|</span>
        {{ $page.post.date }}
      </span>
      <span>
        <span class="mx-4">&nbsp;|</span>
        {{ $page.post.timeToRead }} min read
      </span>
    </div>

    <figure v-if="$page.post.image" class="flex flex-col mb-16">
      <g-image
        :alt="$page.post.image.alt"
        :src="$page.post.image.path"
        class="mb-2 mx-auto w-full"
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
    <div
      class="min-w-0 flex items-start font-light text-gray-500 dark:text-gray-400 pb-10 border-b border-gray-200"
    >
      <g-image
        :alt="authorName"
        :src="$page.post.author.title.image"
        class="rounded-full w-10 mr-3"
      />
      <div class="flex-col">
        <span
          class="block text-sm uppercase font-semibold tracking-wider text-gray-300 dark:text-opacity-50"
        >
          written by
        </span>
        <g-link
          :to="$page.post.author.path"
          class="text-xl font-medium text-gray-700 dark:text-gray-200"
        >
          {{ authorName }}
        </g-link>
        <span class="block text-sm text-gray-700 dark:text-gray-200">
          {{ $page.post.author.title.bio }}
        </span>
      </div>
    </div>
    <div class="flex flex-wrap my-10 text-sm">
      <g-link
        v-for="tag in $page.post.tags"
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
    query Post ($path: String!) {
        post: blogPost(path: $path) {
            title
            date (format: "MMMM D, Y")
            content
            summary
            path
            timeToRead
            pillar {
              title
            }
            image {
              path
              caption
              alt
            }
            author {
              path
              title {
                name
                image (width: 200, height: 200)
                bio
              }
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
import Utils from "../mixins/Utils.vue";
export default {
  mixins: [PostSEO, Utils],
  computed: {
    seriesOverviewName() {
      const overviewName = this.unSlugify(this.$page.post.pillar.title);
      return overviewName;
    },
    seriesOverviewLink() {
      return "/blog/" + this.seriesOverviewName;
    },
    authorName() {
      const authorName = this.unSlugify(this.$page.post.author.title.name);
      return authorName;
    },
  },
};
</script>
