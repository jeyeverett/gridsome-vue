<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
    :class="classes"
  >
    <polygon
      fill="#a1a1aa"
      points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
    />
    <polygon
      fill="#616166"
      points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
    />
  </svg>
</template>

<script>
export default {
  props: ["classes"],
};
</script>
