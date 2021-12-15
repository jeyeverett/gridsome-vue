<template>
  <Layout>
    <div class="py-16 mx-auto container-inner">
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
    </div>
  </Layout>
</template>

<page-query>
query Posts ($id: ID!) {
  posts: allBlogPost (sortBy: "date", order: ASC, filter: { pillar: {eq: $id } })  {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
        pillar {
          title
        }
        pillarContent {
          text
          pillarTitle
        }
      }
    }
  }
}
</page-query>

<script>
import Utils from "../mixins/Utils.vue";

export default {
  mixins: [Utils],
  metaInfo() {
    return {
      title: this.pillarTitle,
    };
  },
  computed: {
    pillarTitle() {
      console.log(this.$page.posts.edges[0].node.pillarContent.pillarTitle);
      return this.$page.posts.edges[0].node.pillarContent.pillarTitle;
    },
    pillarOverview() {
      return this.$page.posts.edges[0].node.pillarContent.text;
    },
  },
};
</script>
