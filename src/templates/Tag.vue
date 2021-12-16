<template>
  <Layout>
    <section class="min-h-screen">
      <h1 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-200">
        {{ $page.tag.title }}
      </h1>
      <h2 v-if="$page.tag.description" class="mb-8">
        {{ $page.tag.description }}
      </h2>
      <ul
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto gap-8 mb-16"
      >
        <PostOverview
          v-for="post in $page.tag.belongsTo.edges"
          :key="post.path"
          :post="post"
        />
      </ul>
      <Pager :page-info="$page.tag.belongsTo.pageInfo" :range="3" />
    </section>
  </Layout>
</template>

<page-query>
query Tag($id: ID!, $page: Int) {
    tag: tag (id: $id) {
        title
        description
        belongsTo(sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate {
          pageInfo {
            totalPages
            currentPage
          }
          totalCount
          edges {
              node {
                  ...on BlogPost {
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
    }
}
</page-query>

<script>
import Pager from "../components/Pager.vue";
import PostOverview from "../components/PostOverview.vue";

export default {
  components: { Pager, PostOverview },
  metaInfo() {
    return {
      title: "Tag: " + this.$page.tag.title,
    };
  },
};
</script>
