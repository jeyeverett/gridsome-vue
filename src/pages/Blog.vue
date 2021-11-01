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
      <PostOverview
        v-for="post in $page.posts.edges"
        :key="post.path"
        :post="post"
      />
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
import PostOverview from "../components/PostOverview.vue";

export default {
  components: {
    Pager,
    PostOverview,
  },
  metaInfo: {
    title: "Blog Posts",
  },
};
</script>
