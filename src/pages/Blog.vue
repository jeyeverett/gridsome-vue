<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-5">Blog</h1>
    <figure class="flex flex-col mb-16">
      <g-image
        alt="blog"
        src="../../content/media/blog.jpg"
        class="mb-2 mx-auto"
      />
      <figcaption class="self-center font-light text-sm image-caption">
        Photo by
        <a
          href="https://unsplash.com/@artlasovsky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Art Lasovsky
        </a>
        on
        <a
          href="https://unsplash.com/s/photos/writing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </figcaption>
    </figure>
    <ul class="list-outside list-disc">
      <li v-for="post in $page.posts.edges" :key="post.path" class="mt-3">
        <g-link :to="post.node.path">
          {{ post.node.title }} - {{ post.node.date }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost (sortBy: "date", order: DESC) {
    edges {
      node {
        title
        date (format: "MMMM D, Y")
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blog Posts",
  },
};
</script>
