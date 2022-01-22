<template>
  <Layout>
    <section class="py-16 mx-auto container-inner">
      <h1 class="heading-primary">
        {{ pillarTitle }}
      </h1>
      <p
        class="mt-6 prose dark:prose-light lg:prose-lg xl:prose-xl"
        v-html="pillarOverview"
      />
      <div class="px-4 py-4 mt-6">
        <h2 class="mt-2 text-2xl font-bold">
          Table of Contents
        </h2>
        <ul class="mt-6">
          <li
            v-for="post in $page.posts.edges"
            :key="post.id"
            class="mb-5 text-lg list-decimal list-inside"
          >
            <span class="">
              <g-link :to="post.node.path" class="text-copy-primary">
                {{ post.node.title }}
              </g-link>
            </span>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <h2 class="text-3xl text-gray-700 font-semibold mb-10">Posts</h2>
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
query Posts ($id: ID!, $page: Int) {
  posts: allBlogPost (sortBy: "date", order: ASC, filter: { pillar: { eq: $id, ne: "projects" } },  perPage: 6, page: $page) @paginate  {
    totalCount
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
        pillarContent {
          pillarTitle
          text
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
import Utils from "../mixins/Utils.vue";
import Pager from "../components/Pager.vue";
import PostOverview from "../components/PostOverview.vue";

export default {
  components: {
    Pager,
    PostOverview,
  },
  mixins: [Utils],
  metaInfo() {
    return {
      title: this.pillarTitle,
    };
  },
  computed: {
    pillarTitle() {
      return this.$page.posts.edges[0].node.pillarContent.pillarTitle;
    },
    pillarOverview() {
      return this.$page.posts.edges[0].node.pillarContent.text;
    },
  },
  mounted() {
    if (window.location.href.includes("projects")) {
      window.location.replace("https://jeysenfreedman.com/projects");
    }
  },
};
</script>
