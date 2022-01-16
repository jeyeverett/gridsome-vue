<template>
  <a :href="specialty.url" target="_blank" class="flex items-center">
    <g-image
      :alt="specialty.name"
      :src="specialty.src"
      :class="specialty.class"
      :title="specialty.name"
    />
  </a>
</template>

<script>
export default {
  props: {
    specialty: {
      type: Object,
      required: true,
    },
  },
};
</script>
