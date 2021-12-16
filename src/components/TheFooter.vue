<template>
  <footer class="px-4 py-14 bg-gray-700 w-full">
    <nav
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white w-5/6 mx-auto"
    >
      <div class="flex flex-col mx-2 text-center sm:text-left">
        <g-link to="/blog" class="font-medium uppercase tracking-wide mb-4">
          Blog
        </g-link>
        <g-link
          v-for="post in $static.posts.edges"
          :key="post.node.title"
          :to="post.node.path"
          class="text-xs mb-2 mx-auto sm:ml-1 w-3/4 lg:w-full"
        >
          {{ post.node.title }}
        </g-link>
      </div>
      <div class="flex flex-col mx-2 text-center sm:text-left">
        <g-link to="/projects" class="font-medium uppercase tracking-wide mb-4">
          Projects
        </g-link>
        <g-link to="/projects/project-1" class="text-xs mb-2 ml-1">
          Project 1 - lorem ipsum
        </g-link>
        <g-link to="/projects/project-2" class="text-xs mb-2 ml-1">
          Project 2 - ete ben
        </g-link>
        <g-link to="/projects/project-3" class="text-xs mb-2 ml-1">
          Project 3 - lorem ipsum dol
        </g-link>
        <g-link to="/projects/project-4" class="text-xs mb-2 ml-1">
          Project 4 - si coma
        </g-link>
        <g-link to="/projects/project-5" class="text-xs mb-2 ml-1">
          Project 5 - belem
        </g-link>
      </div>
      <div class="flex flex-col items-center sm:items-start mx-2 mb-4 sm:mb-0">
        <g-link to="/about" class="font-medium uppercase tracking-wide">
          <figure
            class="my-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start"
          >
            <g-image
              src="../../content/media/jeysen-freedman.jpg"
              width="200"
              height="200"
              class="rounded-lg w-12 mr-2 mb-2 sm:mb-0"
            />
            <p
              class="font-semibold uppercase tracking-wide leading-tight w-1/2  text-center sm:text-left"
            >
              Jeysen Freedman
            </p>
          </figure>
          <figcaption
            class="text-xs tracking-tight ml-2 text-center sm:text-left"
          >
            <div>Full Stack Developer</div>
            <div>Cloud Specialist</div>
          </figcaption>
        </g-link>
      </div>
      <div class="flex flex-col mx-2">
        <span
          class="font-medium uppercase tracking-wide mb-4 text-center sm:text-left"
        >
          Contact Me
        </span>
        <form @submit.prevent="" class="flex flex-col">
          <span class="relative mb-2">
            <label
              v-if="!email.length"
              for="email"
              class="absolute left-2 pt-0.5 text-gray-900 text-sm font-medium uppercase tracking-wider cursor-text select-none"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              class="bg-gray-400 rounded-sm shadow text-gray-900 w-full text-sm px-2 py-0.5"
              required
            />
          </span>
          <span class="relative mb-2">
            <label
              v-if="!message.length"
              for="message"
              class="absolute left-2 pt-0.5 text-gray-900 text-sm font-medium uppercase tracking-wider cursor-text select-none"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              v-model="message"
              class="bg-gray-400 rounded-sm shadow resize-none h-20 w-full text-gray-900 px-2 py-0.5 text-sm"
            />
          </span>
          <button
            class="border border-gray-200 text-gray-200 uppercase tracking-wide text-sm rounded hover:bg-gray-500 shadow"
          >
            Send!
          </button>
        </form>
      </div>
    </nav>
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
export default {
  data() {
    return {
      email: "",
      message: "",
    };
  },
};
</script>

<style>
#message::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

#message::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

#message::-webkit-scrollbar-thumb {
  background-color: rgba(24, 24, 27, 0.7);
  border-radius: 1px;
}
</style>
