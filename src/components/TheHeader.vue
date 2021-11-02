<template>
  <header
    class="flex flex-col md:flex-row min-w-full px-2 sm:px-8 md:px-16 sm:justify-between items-center mt-6 mb-10 sm:mb-12"
  >
    <strong>
      <g-link to="/" class="text-blue">Logo.</g-link>
    </strong>
    <nav
      class="flex flex-col items-center sm:flex-row sm:justify-end w-full sm:w-3/5 mt-4 sm:mt-0"
    >
      <theme-switcher class="py-1 sm:py-2 sm:mr-3" v-if="$route.path !== '/'" />
      <span class="mt-4 sm:mt-0 sm:flex">
        <g-link
          class="font-medium px-2 py-1 sm:px-4 sm:py-2 sm:mx-1 border border-transparent rounded-sm hover:bg-gray-300 hover:text-blue transition-all"
          to="/about/"
        >
          About
        </g-link>
        <g-link
          class="font-medium px-2 py-1 sm:px-4 sm:py-2 sm:mx-1 border border-transparent rounded-sm hover:bg-gray-300 hover:text-blue transition-all"
          to="/projects"
        >
          Projects
        </g-link>
        <g-link
          class="font-medium px-2 py-1 sm:px-4 sm:py-2 sm:mx-1 border border-transparent rounded-sm hover:bg-gray-300 hover:text-blue transition-all"
          to="/blog"
        >
          Blog
        </g-link>
        <g-link
          class="font-medium px-2 py-1 sm:px-4 sm:py-2 sm:mx-1 border border-transparent rounded-sm hover:bg-gray-300 hover:text-blue transition-all sm:hidden"
          to="/contact"
        >
          Contact
        </g-link>
        <contact-button
          :isDisplayed="true"
          :isTyping="false"
          buttonText="Contact me"
          textClasses="font-medium"
          class="hidden sm:block"
        />
      </span>
    </nav>
  </header>
</template>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
import ContactButton from "../components/ContactButton.vue";

export default {
  components: {
    ThemeSwitcher,
    ContactButton,
  },
};
</script>
