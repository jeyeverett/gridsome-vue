<template>
  <header
    class="flex min-w-full px-2 sm:px-8 md:px-16 justify-between items-center mt-6 mb-12"
  >
    <strong>
      <g-link to="/" class="text-blue">Logo.</g-link>
    </strong>
    <nav class="flex justify-around w-64">
      <theme-switcher class="px-4 py-2" v-if="$route.path !== '/'" />
      <g-link
        class="font-medium px-4 py-2 border border-transparent rounded-sm hover:bg-gray-300 hover:text-blue transition-all"
        to="/"
      >
        Home
      </g-link>
      <g-link
        class="font-medium px-4 py-2 border border-transparent rounded-sm hover:bg-gray-300 hover:text-blue transition-all"
        to="/about/"
      >
        About
      </g-link>
      <g-link
        class="font-medium px-4 py-2 border border-transparent rounded-sm hover:bg-gray-300 hover:text-blue transition-all"
        to="/blog"
      >
        Blog
      </g-link>
    </nav>
  </header>
</template>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher.vue";

export default {
  components: {
    ThemeSwitcher,
  },
};
</script>
