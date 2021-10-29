<template>
  <Layout>
    <h1 class="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-200">
      {{ $page.author.title }}
    </h1>
    <ul class="list-outside list-disc">
      <li
        v-for="post in $page.author.belongsTo.edges"
        :key="post.node.id"
        class="mt-3"
      >
        <g-link :to="post.node.path">
          {{ post.node.title }} - {{ post.node.date }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Author($id: ID!) {
    author: author (id: $id) {
        title
        belongsTo {
            totalCount
            edges {
                node {
                    ...on BlogPost {
                        title
                        date (format: "MMMM D, Y")
                        path
                    }
                }
            }
        }
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Tag: " + this.$page.author.title,
    };
  },
};
</script>
