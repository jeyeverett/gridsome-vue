<template>
  <Layout>
    <section class="min-h-screen">
      <h1
        class="mb-2 text-3xl font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide"
      >
        {{ $page.tag.title }}
      </h1>
      <p v-if="$page.tag.description" class="mb-8">
        {{ $page.tag.description }}
      </p>
      <h2 class="text-2xl font-semibold text-gray-700 dark:text-white mb-8">
        Recent Posts
      </h2>
      <ul
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto gap-8 mb-16"
        v-if="postsExist"
      >
        <PostOverview
          v-for="post in $page.tag.belongsTo.edges"
          :key="post.path"
          :post="post"
        />
      </ul>
      <p v-else>Posts for this tag are coming soon!</p>
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
                  ...on Project {
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
  computed: {
    postsExist() {
      return !!this.$page.tag.belongsTo.edges[0].node.title;
    },
  },
};
</script>
