<template>
  <header
    class="flex flex-col md:flex-row min-w-full px-2 sm:px-8 md:px-16 sm:justify-between items-center mt-6 mb-10 sm:mb-12"
  >
    <strong>
      <g-link to="/" class="text-blue">Logo.</g-link>
    </strong>
    <nav
      class="flex flex-col items-center md:flex-row md:justify-end w-full mt-4 md:mt-0"
    >
      <theme-switcher class="py-1 sm:py-2 sm:mr-3" v-if="$route.path !== '/'" />
      <span class="mt-4 sm:mt-0 sm:flex">
        <nav-link route="projects" />
        <nav-link route="blog" />
        <nav-link route="about" />
        <contact-button
          :is-displayed="true"
          :is-typing="false"
          button-text="Contact me"
          text-classes="font-medium"
          class="ml-1 hidden sm:block"
        />
      </span>
    </nav>
  </header>
</template>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
import ContactButton from "../components/ContactButton.vue";
import NavLink from "../components/NavLink.vue";

export default {
  components: {
    ThemeSwitcher,
    ContactButton,
    NavLink,
  },
};
</script>
