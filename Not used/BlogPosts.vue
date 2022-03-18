<template>
  <Layout>
    <section class="mx-auto">
      <h1 class="text-5xl font-semibold text-gray-700 dark:text-white mb-10">
        All Posts
      </h1>
      <ul
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto gap-8 mb-16"
      >
        <PostOverview
          v-for="post in $page.posts.edges"
          :key="post.path"
          :post="post"
          class="post"
        />
      </ul>
      <Pager :page-info="$page.posts.pageInfo" :range="1" />
    </section>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allBlogPost (sortBy: "date", order: DESC, filter: { title: { ne: "Projects Page" } }, perPage: 6, page: $page) @paginate {
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
          pathSmall
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
import gsap from "gsap";
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
  mounted() {
    gsap.from(".post", {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: "power1",
      stagger: 0.1,
    });
  },
};
</script>

<style scoped>
.post {
  overflow: hidden;
}
</style>
