<template>
  <nav
    v-if="headingList"
    class="flex flex-col bg-gray-100 rounded-sm px-4 py-2 w-max mx-auto"
  >
    <h2 class="text-gray-700 font-semibold text-lg mb-2">
      Table of Contents
    </h2>
    <a
      v-for="item in headingList"
      :key="item.id"
      :href="`#${item.id}`"
      class="block text-gray-700 italic hover:bg-gray-200"
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
      }}
    </a>
  </nav>
</template>

<script>
import Utils from "../mixins/Utils.vue";

export default {
  props: ["headingList"],
  mixins: [Utils],
};
</script>
