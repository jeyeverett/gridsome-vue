<template>
  <g-link
    class="font-medium px-2 py-1 sm:px-4 sm:py-2 sm:mx-1 border border-transparent text-gray-800 dark:text-white rounded hover:bg-gray-500 hover:text-white hover:border-gray-500 transition-all"
    :to="path"
  >
    {{ page }}
  </g-link>
</template>

<script>
export default {
  props: ["route"],
  computed: {
    path() {
      return "/" + this.route;
    },
    page() {
      return this.route[0].toUpperCase() + this.route.slice(1);
    },
  },
};
</script>
