<template>
  <Layout>
    <h1 class="text-3xl font-semibold mb-2">Blog</h1>
    <h2
      class="mb-10 font-light text-gray-500 dark:text-gray-400 transition-all"
    >
      Our latest web development tips, tricks, insights, and resources, hot off
      the presses.
    </h2>
    <section
      class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto gap-4 mb-16"
    >
      <article
        v-for="post in $page.posts.edges"
        :key="post.path"
        class="border border-color-gray-200 dark:border-color-gray-50 rounded dark:border-gray-600 overflow-hidden transition-all"
      >
        <g-link :to="post.node.path">
          <g-image :alt="post.node.image.alt" :src="post.node.image.path" />
        </g-link>
        <div class="px-4 py-2">
          <g-link
            :to="'/blog/' + post.node.pillar.title"
            append=""
            class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-200 transition-all hover:text-gray-700 dark:hover:text-gray-300"
          >
            {{ unSlugify(post.node.pillar.title) }}
          </g-link>
          <h3 class="mb-2">
            <g-link
              :to="post.node.path"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition-all"
              >{{ post.node.title }}</g-link
            >
          </h3>
          <p class="text-xs mb-4">{{ post.node.summary }}</p>
          <div
            class="flex items-start font-light text-gray-500 dark:text-gray-400"
          >
            <g-image
              :alt="unSlugify(post.node.author.title.name)"
              :src="post.node.author.title.image"
              class="rounded-full w-6 mr-3"
            />
            <span class="mt-1">
              <g-link
                :to="post.node.author.path"
                class="text-xs block transition-all hover:text-gray-700 dark:hover:text-gray-300 transition-all"
              >
                {{ unSlugify(post.node.author.title.name) }}
              </g-link>
              <span>
                <span class="text-xs transition-all">
                  {{ post.node.date }}
                </span>
                <span class="text-xs transition-all">
                  <span class="mx-1">&nbsp;|</span>
                  {{ post.node.timeToRead }} min
                </span>
              </span>
            </span>
          </div>
        </div>
      </article>
    </section>
    <Pager
      :info="$page.posts.pageInfo"
      class="px-4 py-2 flex justify-between w-60 border border-gray-200 rounded dark:border-gray-600 transition-all mx-auto"
      linkClass="text-sm px-4 py-2 font-semibold font-light text-gray-600 dark:text-gray-300 border rounded border-transparent hover:text-white hover:bg-gray-500 hover:border-gray-500 transition-all ease-linear"
      :range="3"
      activeLinkClass="text-blue bg-gray-200 border-gray-200 dark:border-gray-600 dark:bg-gray-600"
    />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allBlogPost (sortBy: "date", order: DESC, perPage: 9, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        date (format: "MMMM D, Y")
        path
        summary
        timeToRead
        image {
          path
          caption
          alt
        }
        pillar {
          title
        }
        author {
          path
          title {
            name
            image (width: 200, height: 200)
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Utils from "../mixins/Utils.vue";

export default {
  components: {
    Pager,
  },
  mixins: [Utils],
  metaInfo: {
    title: "Blog Posts",
  },
};
</script>
