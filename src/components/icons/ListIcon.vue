<template>
  <transition mode="out-in">
    <svg
      v-if="!showTable"
      xmlns="http://www.w3.org/2000/svg"
      :class="classes"
      class="transition-all"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      @click="$emit('click')"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      :class="classes"
      class="transition-all"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      @click="$emit('click')"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </transition>
</template>

<script>
export default {
  props: ["classes", "show-table"],
};
</script>
