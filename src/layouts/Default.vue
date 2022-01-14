<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all delay-100 ease-linear items-center"
  >
    <TheHeader />
    <main class="w-full md:w-3/4 xl:w-2/3 mx-auto px-5 pb-20">
      <slot />
    </main>
    <TheFooter />
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
import TheFooter from "../components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
