<template>
  <Layout>
    <h1 class="text-3xl font-semibold mb-2">Blog</h1>
    <h2 class="mb-10 font-light text-gray-500 dark:text-gray-400">
      Our latest web development tips, tricks, insights, and resources, hot off
      the presses.
    </h2>
    <!-- <figure class="flex flex-col mb-16">
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
    </figure> -->
    <section
      class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-auto gap-4"
    >
      <article
        v-for="post in $page.posts.edges"
        :key="post.path"
        class="border border-color-gray-200 dark:border-color-gray-50 rounded overflow-hidden"
      >
        <g-link :to="post.node.path">
          <g-image :alt="post.node.image.alt" :src="post.node.image.path" />
        </g-link>
        <div class="px-4 py-2">
          <g-link
            :to="'/blog/' + post.node.pillar.title"
            append=""
            class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-200"
          >
            {{ unSlugify(post.node.pillar.title) }}
          </g-link>
          <h3 class="mb-2">
            <g-link :to="post.node.path">{{ post.node.title }}</g-link>
          </h3>
          <p class="text-xs mb-4">{{ post.node.summary }}</p>
          <div
            class="flex items-start font-light text-gray-500 dark:text-gray-400"
          >
            <g-image
              :alt="unSlugify(post.node.author.title.name)"
              :src="post.node.author.title.image"
              class="rounded-full w-6 mr-3"
            />
            <span class="mt-1">
              <g-link :to="post.node.author.path" class="text-xs block">
                {{ unSlugify(post.node.author.title.name) }}
              </g-link>
              <span>
                <span class="text-xs">
                  {{ post.node.date }}
                </span>
                <span class="text-xs">
                  <span class="mx-1">&nbsp;|</span>
                  {{ post.node.timeToRead }} min
                </span>
              </span>
            </span>
          </div>
        </div>
      </article>
    </section>
    <!-- <ul class="list-outside list-disc">
      <li v-for="post in $page.posts.edges" :key="post.path" class="mt-3">
        <g-link :to="post.node.path">
          {{ post.node.title }} - {{ post.node.date }}
        </g-link>
      </li>
    </ul> -->
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
</page-query>

<script>
import Utils from "../mixins/Utils.vue";

export default {
  mixins: [Utils],
  metaInfo: {
    title: "Blog Posts",
  },
};
</script>
