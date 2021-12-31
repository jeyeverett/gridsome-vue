<template>
  <Pager
    :info="pageInfo"
    class="px-4 py-2 mx-auto mb-16 flex justify-between w-full xs:w-80 border border-gray-200 rounded dark:border-gray-600 transition-all"
    link-class="text-sm px-4 py-2 font-semibold font-light text-gray-600 dark:text-gray-300 border border-transparent rounded hover:text-white hover:bg-gray-500 hover:border-gray-500 transition-all ease-linear"
    active-link-class="text-blue bg-gray-200 dark:bg-gray-600 border-gray-200 dark:border-gray-600"
    :range="range"
  />
</template>

<script>
import { Pager } from "gridsome";

export default {
  components: { Pager },
  props: ["pageInfo", "range"],
  mounted() {
    console.log(this.pageInfo);
  },
};
</script>
