<template>
  <div class="flex items-center justify-center" :class="classes">
    <LogoIcon />
    <!-- <div class="relative">
      <span class="italic text-2xl font-bold">J&nbsp;</span>
      <span
        class="italic text-xl font-bold absolute sm:top-0"
        style="left: .375rem"
      >
        F
      </span>
    </div> -->
  </div>
</template>

<script>
import LogoIcon from "./icons/LogoIcon.vue";
export default {
  components: {
    LogoIcon,
  },
  props: ["classes"],
};
</script>
