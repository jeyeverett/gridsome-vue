<template>
  <div class="flex items-center justify-center" :class="classes">
    <LogoIcon />
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
