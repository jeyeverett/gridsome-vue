<template>
  <g-link
    v-if="isDisplayed"
    to="/contact"
    class="text-white px-4 py-2 bg-blue border border-blue rounded hover:shadow-lg hover:bg-blue-dark hover:border-blue-dark transition-all shadow truncate"
    :class="buttonClasses"
  >
    <span class="text-inherit" :class="[textClasses, { typing: isTyping }]">
      {{ buttonText }}
    </span>
  </g-link>
</template>

<script>
export default {
  props: [
    "isDisplayed",
    "buttonText",
    "isTyping",
    "buttonClasses",
    "textClasses",
  ],
};
</script>
