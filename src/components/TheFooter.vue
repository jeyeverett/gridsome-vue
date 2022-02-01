<template>
  <footer class="px-4 pt-14 pb-6 bg-gray-700 w-full relative">
    <nav
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white w-5/6 mx-auto"
    >
      <div class="flex flex-col mx-2 text-center sm:text-left">
        <g-link
          to="/blog"
          class="font-semibold uppercase w-min tracking-wide mb-4 hover:text-gray-200 transition-all self-center sm:self-auto "
        >
          Blog
        </g-link>
        <g-link
          v-for="post in $static.posts.edges.slice(0, 4)"
          :key="post.node.title"
          :to="post.node.path"
          class="text-xs mb-2 mx-auto sm:ml-1 w-3/4 lg:w-full hover:text-gray-200 transition-all"
          :title="post.node.title"
        >
          {{ post.node.title.slice(0, 40) + "..." }}
        </g-link>
      </div>
      <div class="flex flex-col mx-2 text-center sm:text-left">
        <g-link
          to="/projects"
          class="font-semibold uppercase w-min tracking-wide mb-4 self-center sm:self-auto hover:text-gray-200 transition-all"
        >
          Projects
        </g-link>
        <g-link
          to="/projects/#post-makr"
          class="text-xs mb-2 ml-1 hover:text-gray-200 transition-all"
        >
          Post Makr - Next.js & Firebase
        </g-link>
        <g-link
          to="/projects/#personal-website"
          class="text-xs mb-2 ml-1 hover:text-gray-200 transition-all"
        >
          Portfolio Website - Vue.js & Gridsome
        </g-link>
        <g-link
          to="/projects/#object-detector"
          class="text-xs mb-2 ml-1 hover:text-gray-200 transition-all"
        >
          Object Detector - React.js & Tensorflow.js
        </g-link>
        <g-link
          to="/projects/#booxapp"
          class="text-xs mb-2 ml-1 hover:text-gray-200 transition-all"
        >
          Booxapp - Node.js & Express.js
        </g-link>
      </div>
      <div class="flex flex-col items-center sm:items-start mx-2 mb-4 sm:mb-0">
        <g-link to="/about" class="mb-4">
          <figure
            class="flex flex-col sm:flex-row items-center justify-center sm:justify-start"
          >
            <g-image
              alt="Jeysen Freedman"
              src="../../content/media/jeysen-freedman.jpg"
              width="200"
              height="200"
              class="rounded-lg w-12 mr-2 mb-2 sm:mb-0"
            />

            <p
              class="flex flex-col font-semibold uppercase tracking-wide leading-tight w-1/2 items-center sm:items-start"
            >
              <span>Jeysen </span>
              <span>Freedman</span>
            </p>
          </figure>
        </g-link>

        <figcaption
          class="font-medium uppercase text-xs tracking-tight ml-2 text-center sm:text-left"
        >
          <div>Full Stack Developer</div>
          <div>Cloud Specialist</div>
        </figcaption>

        <div class="flex items-center mt-2 sm:pl-4">
          <a
            href="https://linkedin.com/in/jeysenfreedman"
            target="_blank"
            title="linkedin"
            class="mr-2"
          >
            <img
              src="https://img.icons8.com/color/48/FFFFFF/linkedin.png"
              class="mt-2 h-8 filter grayscale"
              alt="linkedin"
              height="32"
              width="32"
            />
          </a>
          <a
            href="https://github.com/jeyeverett"
            target="_blank"
            title="github"
            class="mr-2"
          >
            <img
              src="https://img.icons8.com/fluent-systems-regular/48/FFFFFF/github.png"
              class="mt-2 h-7"
              alt="github"
              height="28"
              width="28"
            />
          </a>
          <a
            href="https://twitter.com/jeysenfreedman"
            target="_blank"
            title="twitter"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/48/FFFFFF/twitter--v1.png"
              class="mt-2 h-7"
              alt="twitter"
              height="28"
              width="28"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col mx-2">
        <span
          class="font-semibold uppercase tracking-wide mb-4 text-center sm:text-left"
        >
          Contact Me
        </span>
        <ContactForm />
      </div>
    </nav>
    <p class="mt-14 text-center text-gray-200 text-sm">
      Copyright &copy; 2022 by Jeysen Freedman - All Rights Reserved
    </p>
  </footer>
</template>

<static-query>
query {
  posts: allBlogPost (sortBy: "date", order: DESC) {
    edges {
      node {
        title
        path
      }
    }
  }
}
</static-query>

<script>
import ContactForm from "./ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>
