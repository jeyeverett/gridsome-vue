<template>
  <g-link
    class="font-medium px-2 py-1 sm:px-4 sm:py-2 sm:mx-1 border border-transparent text-gray-700 dark:text-white rounded hover:bg-gray-200 hover:border-gray-200 hover:shadow transition-all dark:hover:bg-transparent dark:hover:border-gray-100"
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
