<template>
  <li
    class="border border-color-gray-200 dark:border-color-gray-50 rounded dark:border-gray-600 overflow-hidden shadow mx-auto relative"
    style="max-width: 300px; min-width: 250px;"
    :id="project.node.slug"
  >
    <!-- <g-link :to="project.node.path"> -->
    <g-image
      :alt="project.node.image.alt"
      :src="project.node.image.pathSmall"
      height="160"
      width="298"
      class="h-40 object-cover object-center"
    />
    <!-- </g-link> -->
    <div class="px-4 pt-2 pb-9">
      <p
        class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-200 transition-all"
      >
        project
      </p>
      <h3 class="mb-2 flex justify-between">
        <!-- :to="project.node.path" -->
        <span
          class="font-medium text-gray-500 dark:text-gray-200 transition-all"
          :title="project.node.title"
        >
          {{
            project.node.title.length < 25
              ? project.node.title
              : `${project.node.title.slice(0, 25)}..`
          }}
        </span>
      </h3>
      <p class="text-xs text-justify">
        {{ project.node.summary }}
      </p>
      <ul
        class="pt-1 pb-1 border-t border-b border-gray-200 my-2 flex flex-col items-center justify-center"
      >
        <li
          v-for="highlight in project.node.highlights"
          :key="highlight"
          class="text-xs font-medium py-0.5"
        >
          {{ highlight }}
        </li>
      </ul>
    </div>
    <span class="flex justify-between w-full absolute bottom-3">
      <!-- prettier-ignore -->
      <a
        :href="project.node.siteLink"
        :disasbled="!project.node.siteLink"
        :class="
          `text-xs font-semibold p-1 ml-3 border border-gray-200 bg-gray-200 ${
            !project.node.siteLink
              ? 'text-gray-400'
              : 'text-gray-600 hover:bg-gray-300'
          } rounded-sm shadow-sm transition-all`"
        :title="
          project.node.siteLink
            ? `${project.node.title} live view`
            : 'No live view available'"
      >
        Live View
      </a>
      <a
        :href="project.node.githubLink"
        class="text-xs font-semibold p-1 mr-3 text-gray-600 border border-gray-200 bg-gray-200 rounded-sm shadow-sm hover:bg-gray-300 transition-all"
        title="GitHub repo"
      >
        GitHub
      </a>
    </span>
  </li>
</template>

<script>
import Utils from "../mixins/Utils.vue";

export default {
  mixins: [Utils],
  props: ["project"],
};
</script>
