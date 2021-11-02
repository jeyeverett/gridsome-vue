<template>
  <g-link
    to="/contact"
    class="text-white px-4 py-2 bg-blue border border-blue rounded hover:shadow-lg hover:bg-blue-dark hover:border-blue-dark transition-all"
    :class="buttonClasses"
    v-if="isDisplayed"
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
