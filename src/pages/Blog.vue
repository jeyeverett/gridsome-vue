<template>
  <Layout>
    <section class="mx-auto">
      <h1 class="text-5xl font-semibold text-gray-700 dark:text-white mb-4">
        Blog
      </h1>
      <h2 class="mb-10 font-light text-gray-500 dark:text-white transition-all">
        The latest web development tips, tricks, insights, and resources, hot
        off the presses.
      </h2>
      <ul
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto gap-8 mb-16"
      >
        <PostOverview
          v-for="post in $page.posts.edges"
          :key="post.path"
          :post="post"
        />
      </ul>
      <Pager :page-info="$page.posts.pageInfo" :range="3" />
    </section>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allBlogPost (sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate {
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
import Pager from "../components/Pager.vue";
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
