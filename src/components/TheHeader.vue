<template>
  <header
    class="flex flex-col md:flex-row min-w-full px-2 sm:px-8 md:px-16 sm:justify-between items-center mt-6 mb-10 sm:mb-12"
  >
    <strong class="w-1/2">
      <g-link
        to="/"
        class="text-blue flex items-center justify-center md:justify-start"
      >
        <Logo classes="text-blue dark:text-white" />
      </g-link>
    </strong>
    <nav
      class="flex flex-col items-center md:flex-row md:justify-end w-full mt-4 md:mt-0"
    >
      <theme-switcher class="py-1 sm:py-2 sm:mr-3" v-if="$route.path !== '/'" />
      <span class="mt-4 sm:mt-0 sm:flex">
        <NavLink route="projects" />
        <NavLink route="blog" />
        <NavLink route="about" />
        <Button
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
import Button from "./Button.vue";
import NavLink from "../components/NavLink.vue";
import Logo from "../components/Logo.vue";

export default {
  components: {
    ThemeSwitcher,
    Button,
    NavLink,
    Logo,
  },
};
</script>
