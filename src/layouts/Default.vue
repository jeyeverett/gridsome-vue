<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all delay-100 ease-linear items-center"
  >
    <header
      class="flex min-w-full px-2 sm:px-8 md:px-16 justify-between items-center mt-8 mb-12"
    >
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="flex justify-around w-64">
        <theme-switcher />
        <g-link to="/">Home</g-link>
        <g-link to="/about/">About</g-link>
        <g-link to="/blog">Blog</g-link>
      </nav>
    </header>
    <div class="container max-w-screen-md mx-auto px-5">
      <slot />
    </div>
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
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
export default {
  components: {
    ThemeSwitcher,
  },
};
</script>
