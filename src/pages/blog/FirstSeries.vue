<template>
  <Layout>
    <div class="py-16 mx-auto container-inner">
      <h1 class="text-3xl font-bold">
        A Test Series
      </h1>
      <p class="mt-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        tempore nemo delectus dignissimos laboriosam maiores quod.
        Necessitatibus unde quod dolore aliquam, numquam beatae assumenda? Ab
        itaque cupiditate delectus doloremque officia!
      </p>
      <div class="px-4 py-4 mt-8 rounded-lg bg-background-secondary">
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
      <p class="mt-8 blockquote-green">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        reiciendis dolore! Maiores totam ratione, officia ullam unde quae
        voluptates aliquam libero omnis delectus nulla voluptas facilis
        doloremque deleniti similique autem.
      </p>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost (sortBy: "date", order: ASC, filter: { series: {eq: "first-series"} })  {
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
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "A Test Series",
  },
};
</script>
