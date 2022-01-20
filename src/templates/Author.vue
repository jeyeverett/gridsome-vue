<template>
  <Layout>
    <section class="min-h-screen">
      <h1 class="text-5xl font-semibold text-gray-700 mb-2">
        {{ authorName }}
      </h1>
      <p class="text-gray-700 mt-4 mb-8 font-medium">
        {{ $page.author.title.bio }}
      </p>
      <h2 class="text-2xl font-semibold text-gray-700 dark:text-white mb-8">
        Recent Posts
      </h2>
      <ul
        class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto gap-8 mb-16"
      >
        <PostOverview
          v-for="post in $page.author.belongsTo.edges"
          :key="post.path"
          :post="post"
        />
      </ul>
      <Pager :page-info="$page.author.belongsTo.pageInfo" :range="3" />
    </section>
  </Layout>
</template>

<page-query>
query Author($id: ID!, $page: Int) {
    author: author (id: $id) {
        title {
          image
          name
          bio
        }
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
                        bio
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
import Utils from "../mixins/Utils.vue";
import Pager from "../components/Pager.vue";
import PostOverview from "../components/PostOverview.vue";

export default {
  components: { Pager, PostOverview },
  mixins: [Utils],
  metaInfo() {
    return {
      title: "Author: " + this.authorName,
    };
  },
  computed: {
    authorName() {
      const authorName = this.unSlugify(this.$page.author.title.name);
      return authorName;
    },
  },
};
</script>
