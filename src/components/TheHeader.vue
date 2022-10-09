<template>
  <header
    class="flex flex-col md:flex-row min-w-full px-2 sm:px-8 md:px-16 sm:justify-between items-center mt-6 mb-10 sm:mb-12"
  >
    <g-link
      to="/"
      class="text-blue flex items-center justify-center md:justify-start"
      aria-label="logo link to homepage"
    >
      <strong>
        <Logo classes="text-blue dark:text-white" />
      </strong>
    </g-link>
    <nav
      class="flex flex-col items-center md:flex-row md:justify-end w-full mt-4 md:mt-0"
    >
      <theme-switcher class="py-1 sm:py-2 md:mr-3" v-if="$route.path !== '/'" />
      <span class="mt-4 sm:mt-0 flex items-center">
        <!-- <NavLink route="projects" />
        <NavLink route="about" /> -->
        <Button
          :is-displayed="true"
          button-text="Contact me"
          text-classes="font-medium"
          class="ml-1 hidden sm:block transition-all"
          @click="toggleModal"
        />
        <MailIcon
          classes="block sm:hidden h-7 w-7 mb-0.5 cursor-pointer text-blue"
          @click="toggleModal"
          title="contact"
        />
      </span>
    </nav>
    <Modal :is-modal-visible="isModalVisible" @click="isModalVisible = false" />
  </header>
</template>

<script>
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
import Button from "./Button.vue";
import NavLink from "../components/NavLink.vue";
import Logo from "../components/Logo.vue";
import Modal from "../components/Modal.vue";
import MailIcon from "../components/icons/MailIcon.vue";

export default {
  components: {
    ThemeSwitcher,
    Button,
    NavLink,
    Logo,
    Modal,
    MailIcon,
  },
  emits: ["toggle-modal"],
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
      this.$emit("toggle-modal");
    },
  },
};
</script>
