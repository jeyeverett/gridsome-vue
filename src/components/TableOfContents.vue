<template>
  <nav
    v-if="headings"
    class="flex flex-col border-2 border-gray-200 dark:border-gray-700 dark:text-white rounded-sm px-4 py-2 w-max mx-auto"
  >
    <h2
      class="text-center uppercase tracking-wide text-gray-700 dark:text-white font-semibold text-lg mb-2"
    >
      Table of Contents
    </h2>
    <a
      v-for="item in headings"
      :key="item.id"
      :href="`#${item.id}`"
      class="block text-gray-700 dark:text-white italic hover:bg-gray-200 dark:hover:bg-gray-600"
      :class="{
        'font-semibold': item.tagName === 'H2',
        'ml-2 font-medium': item.tagName === 'H3',
        'ml-4': item.tagName === 'H4',
      }"
    >
      {{
        unSlugify(item.id)
          .replace("json", ".json")
          .replace("Package Lock", "Package-lock")
          .replace("Npm", "NPM")
          .replace("Es", "ES")
          .replace("Fs", "FS")
          .replace("10", "1.0")
          .replace("20", "2.0")
          .replace("Api", "API")
          .replace("Url", "URL")
      }}
    </a>
  </nav>
</template>

<script>
import Utils from "../mixins/Utils.vue";

export default {
  mixins: [Utils],
  data() {
    return {
      headings: null,
    };
  },
  mounted() {
    const post = document.getElementById("post-content");
    const headings = post.querySelectorAll("h2, h3, h4, h5");
    this.headings = headings;
  },
};
</script>
