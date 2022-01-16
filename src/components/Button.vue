<template>
  <button
    class="text-white px-4 py-2 bg-blue border border-blue rounded hover:shadow-lg hover:bg-blue-dark hover:border-blue-dark shadow truncate"
    :class="buttonClasses"
    @click="$emit('click')"
  >
    <span class="text-inherit" :class="[textClasses]">
      {{ buttonText }}
    </span>
  </button>
</template>

<script>
export default {
  props: ["buttonText", "buttonClasses", "textClasses"],
};
</script>
