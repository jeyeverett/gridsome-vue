<template>
  <li
    class="border border-color-gray-200 dark:border-color-gray-50 rounded dark:border-gray-600 overflow-hidden shadow mx-auto"
    style="max-width: 300px; min-width: 250px;"
  >
    <g-link :to="post.node.path">
      <g-image
        :alt="post.node.image.alt"
        :src="post.node.image.path"
        height="160"
        width="300"
        class="h-40 object-cover object-center"
      />
    </g-link>
    <div class="px-4 py-2">
      <g-link
        :to="'/blog/' + post.node.pillar.title"
        class="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-200 transition-all hover:text-gray-700 dark:hover:text-gray-300"
      >
        {{ unSlugify(post.node.pillar.title) }}
      </g-link>
      <h3 class="mb-2">
        <g-link
          :to="post.node.path"
          class="font-medium text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition-all"
          :title="post.node.title"
        >
          {{
            post.node.title.length < 25
              ? post.node.title
              : `${post.node.title.slice(0, 25)}..`
          }}
        </g-link>
      </h3>
      <p class="text-xs mb-4 text-justify">{{ post.node.summary }}</p>
      <div class="flex items-start font-light text-gray-500 dark:text-gray-400">
        <g-image
          :alt="unSlugify(post.node.author.title.name)"
          :src="post.node.author.title.image"
          class="rounded-full w-6 mr-3"
          width="24"
          height="24"
        />
        <span class="mt-1">
          <g-link
            :to="'/author/' + post.node.author.title.name"
            class="text-xs block transition-all hover:text-gray-700 dark:hover:text-gray-300"
          >
            {{ unSlugify(post.node.author.title.name) }}
          </g-link>
          <span>
            <span class="text-xs transition-all">
              {{ post.node.date }}
            </span>
            <span class="text-xs transition-all">
              <span class="mx-1">&nbsp;|</span>
              {{ post.node.timeToRead }} min
            </span>
          </span>
        </span>
      </div>
    </div>
  </li>
</template>

<script>
import Utils from "../mixins/Utils.vue";

export default {
  mixins: [Utils],
  props: ["post"],
};
</script>
