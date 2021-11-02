<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all delay-100 ease-linear items-center"
  >
    <the-header />
    <main class="container max-w-screen-md mx-auto px-5">
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>

<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
