<template>
  <div class="flex items-center justify-center" :class="classes">
    <div class="relative">
      <span class="italic text-2xl font-bold">J</span>
      <span
        class="italic text-xl font-bold absolute sm:top-0"
        style="left: .375rem"
      >
        F
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["classes"],
};
</script>
