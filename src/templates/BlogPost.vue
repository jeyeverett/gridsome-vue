<template>
  <Layout>
    <g-link :to="seriesOverviewLink">
      <span class="">{{ seriesOverviewName }}</span>
    </g-link>
    <h1
      class="mb-6 text-4xl font-semibold text-gray-900 dark:text-gray-200 transition-all"
    >
      {{ $page.post.title }}
    </h1>
    <div class="flex items-center font-light text-gray-500 dark:text-gray-400">
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
    <figure v-if="$page.post.image" class="flex flex-col mb-16">
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
