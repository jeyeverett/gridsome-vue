<template>
  <li
    class="border border-color-gray-200 dark:border-color-gray-50 rounded dark:border-gray-600 overflow-hidden shadow mx-auto relative"
    style="max-width: 300px; min-width: 250px;"
  >
    <g-link :to="project.node.path">
      <g-image
        :alt="project.node.image.alt"
        :src="project.node.image.path"
        height="160"
        width="298"
        class="h-40 object-cover object-center"
      />
    </g-link>
    <div class="px-4 py-2">
      <p
        class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-200 transition-all hover:text-gray-700 dark:hover:text-gray-300"
      >
        project
      </p>
      <h3 class="mb-2 flex justify-between">
        <g-link
          :to="project.node.path"
          class="font-medium text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition-all"
          :title="project.node.title"
        >
          {{
            project.node.title.length < 25
              ? project.node.title
              : `${project.node.title.slice(0, 25)}..`
          }}
        </g-link>
      </h3>
      <p class="text-xs text-justify">
        {{ project.node.summary }}
      </p>
      <ul
        class="pt-1 border-t border-gray-200 mt-2 flex flex-col items-center justify-center"
      >
        <li
          v-for="highlight in project.node.highlights"
          :key="highlight"
          class="text-xs font-medium py-0.5"
        >
          {{ highlight }}
        </li>
      </ul>
      <span class="flex justify-between mb-2">
        <a
          :href="project.node.siteLink"
          class="text-xs font-semibold p-1 text-gray-500 border border-gray-200 rounded-sm shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 transition-all"
          :title="project.node.title"
        >
          Live View
        </a>
        <a
          :href="project.node.githubLink"
          class="text-xs font-semibold p-1 text-gray-500 border border-gray-200 rounded-sm shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 transition-all"
          title="GitHub repo"
        >
          GitHub
        </a>
      </span>
    </div>
  </li>
</template>

<script>
import Utils from "../mixins/Utils.vue";

export default {
  mixins: [Utils],
  props: ["project"],
};
</script>
