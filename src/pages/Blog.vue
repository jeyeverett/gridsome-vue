<template>
  <Layout>
    <section class="mx-auto">
      <h1 class="text-5xl font-semibold text-gray-700 dark:text-white mb-4">
        Blog
      </h1>
      <p class="mb-10 font-light text-gray-500 dark:text-white transition-all">
        The latest web development tips, tricks, insights, and resources, hot
        off the presses.
      </p>

      <h2 class="text-3xl font-semibold text-gray-700 dark:text-white mb-8">
        Recent Posts
      </h2>
      <ul
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto gap-8 mb-16 mx-auto"
      >
        <PostOverview
          v-for="post in $page.posts.edges"
          :key="post.node.path"
          :post="post"
          class="post"
        />
      </ul>
      <div class="text-center">
        <g-link
          to="/blog-posts"
          class="text-gray-700 px-4 py-2 border border-gray-700 dark:border-white dark:text-white rounded hover:shadow-lg hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 transition-all shadow truncate font-medium"
        >
          See all posts
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost (sortBy: "date", order: DESC, filter: { title: { ne: "Projects Page" } },) {
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
import PostOverview from "../components/PostOverview.vue";

export default {
  components: {
    PostOverview,
  },
  metaInfo: {
    title: "Blog Posts",
  },
  mounted() {
    gsap.from(".post", {
      duration: 0.75,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: "power1",
      stagger: 0.25,
    });
  },
};
</script>
