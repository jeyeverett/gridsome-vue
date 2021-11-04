<template>
  <div class="bg-hero-pattern h-screen pt-6 bg-cover bg-no-repeat">
    <the-header style="marginTop: 0;" />
    <section class="px-2 sm:px-20 py-10">
      <div
        class="flex flex-col items-center sm:block sm:ml-5 md:ml-10 xl:ml-36"
      >
        <vue-typed-js
          :strings="['Hi, ^500I\'m Jeysen.']"
          class="mb-2 text-4xl sm:text-6xl font-bold tracking-normal sm:tracking-tight"
          style="color: #1379a8"
          :startDelay="1000"
          @onStringTyped="disableCursor('h1')"
          id="h1"
        >
          <h1 class="typing text-center sm:text-left" />
        </vue-typed-js>
        <vue-typed-js
          :strings="['Full Stack Web Developer']"
          class="sm:pl-1 mb-5 md:mb-10 text-md sm:text-2xl tracking-wide sm:tracking-wider uppercase"
          style="color: #1379a8"
          :startDelay="500"
          @onStringTyped="disableCursor('h2')"
          id="h2"
          v-if="h1Complete"
        >
          <h2 class="typing font-semibold text-center sm:text-left" />
        </vue-typed-js>

        <vue-typed-js
          :strings="[
            'Do you need a blazing fast website from the future?^300',
            'Do you want to build a robust web application that delivers real value to users?^300',
            'Do you dream of using powerful modern web technologies to solve real problems, supercharge your business and reach a global audience?',
          ]"
          class="pl-1 mb-14 md:mb-20 text-md w-full md:w-3/6"
          id="p"
          :startDelay="500"
          :typeSpeed="15"
          :showCursor="false"
          @onComplete="disableCursor('p')"
          v-if="h2Complete"
        >
          <p class="typing text-center sm:text-left" />
        </vue-typed-js>

        <transition
          enter-active-class="transition-all delay-1000 duration-1000 ease-out"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
        >
          <contact-button
            :isDisplayed="pComplete"
            :isTyping="true"
            buttonText="Let's work together!"
            buttonClasses="px-6 py-3"
            textClasses="font-semibold"
          />
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import ContactButton from "../components/ContactButton.vue";
import { VueTypedJs } from "vue-typed-js";

export default {
  components: {
    TheHeader,
    ContactButton,
    VueTypedJs,
  },
  metaInfo: {
    title: "Hello, world!",
  },
  data() {
    return {
      h1Complete: false,
      h2Complete: false,
      pComplete: false,
    };
  },
  methods: {
    disableCursor(id) {
      if (id !== "p") {
        const container = document.getElementById(id);
        container.removeChild(container.lastChild);
      }
      this[id + "Complete"] = true;
    },
  },
};
</script>
