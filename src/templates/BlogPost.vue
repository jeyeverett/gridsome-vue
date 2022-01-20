<template>
  <Layout>
    <g-link
      :to="seriesOverviewLink"
      class="uppercase tracking-wider text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition-all"
    >
      {{ seriesOverviewName }}
    </g-link>
    <h1
      class="mb-6 text-4xl font-semibold text-gray-700 dark:text-gray-200 transition-all"
    >
      {{ $page.post.title }}
    </h1>
    <div
      class="flex items-start sm:items-center font-light text-gray-500 dark:text-gray-400 mb-10"
    >
      <g-image
        :alt="authorName"
        :src="$page.post.author.title.image"
        class="rounded-full w-8 sm:w-10 mr-3"
        height="446"
        width="730"
      />
      <span class="flex-col sm:flex-row">
        <g-link
          :to="authorLink"
          class="hover:text-gray-700 dark:hover:text-gray-300 transition-all"
        >
          {{ authorName }}
        </g-link>
        <span class="block sm:inline">
          <span class="hidden sm:inline sm:mx-4">&nbsp;|</span>
          {{ $page.post.date }}
        </span>
        <span class="block sm:inline">
          <span class="hidden sm:inline sm:mx-4">&nbsp;|</span>
          {{ $page.post.timeToRead }} min read
        </span>
      </span>
    </div>

    <figure v-if="$page.post.image" class="flex flex-col mb-4 sm:mb-8">
      <g-image
        :alt="$page.post.image.alt"
        :src="$page.post.image.path"
        height="400"
        width="600"
        class="mb-2 mx-auto w-3/4 object-fit object-center rounded"
      />
      <figcaption
        class="self-center font-light text-sm image-caption"
        v-html="$page.post.image.caption"
      />
    </figure>

    <ClientOnly>
      <TableOfContents />
    </ClientOnly>

    <article
      id="post-content"
      class="mb-16 md:px-2 xl:px-4 mx-auto prose dark:prose-light lg:prose-lg xl:prose-xl"
      v-html="$page.post.content"
    />
    <div
      class="min-w-0 flex items-start font-light text-gray-500 dark:text-gray-400 pb-10 border-b border-gray-200"
    >
      <g-image
        :alt="authorName"
        :src="$page.post.author.title.image"
        class="rounded-full w-10 mr-3"
        width="40"
        height="40"
      />
      <div class="flex-col">
        <span
          class="block text-sm uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-400"
        >
          written by
        </span>
        <g-link
          :to="authorLink"
          class="text-xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-300 transition-all"
        >
          {{ authorName }}
        </g-link>
        <span class="block text-sm text-gray-700 dark:text-gray-200">
          {{ $page.post.author.title.bio }}
        </span>
      </div>
    </div>
    <div class="flex flex-wrap mt-10 text-sm">
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
import TableOfContents from "../components/TableOfContents.vue";

export default {
  components: {
    TableOfContents,
  },
  mixins: [PostSEO, Utils],
  computed: {
    seriesOverviewName() {
      return this.unSlugify(this.$page.post.pillar.title);
    },
    seriesOverviewLink() {
      return "/blog/" + this.$page.post.pillar.title;
    },
    authorName() {
      return this.unSlugify(this.$page.post.author.title.name);
    },
    authorLink() {
      return "/author/" + this.$page.post.author.title.name;
    },
  },
};
</script>
