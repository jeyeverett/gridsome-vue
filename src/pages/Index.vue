<template>
  <div
    class="bg-hero-pattern-sm md:bg-hero-pattern-md xl:bg-hero-pattern-lg h-screen pt-6 bg-cover bg-no-repeat"
  >
    <the-header style="marginTop: 0;" />
    <section class="px-2 sm:px-20 py-10">
      <div
        class="flex flex-col items-center sm:block sm:ml-5 md:ml-10 xl:ml-36"
      >
        <vue-typed-js
          id="h1"
          :strings="['Hi, ^500I\'m Jeysen.']"
          class="mb-2 text-4xl sm:text-6xl font-bold tracking-normal sm:tracking-tight"
          style="color: #1379a8"
          :start-delay="1000"
          @onStringTyped="disableCursor('h1')"
        >
          <h1 class="typing text-center sm:text-left" />
        </vue-typed-js>
        <vue-typed-js
          v-if="h1Complete"
          id="h2"
          :strings="['Full Stack Web Developer']"
          class="sm:pl-1 mb-5 md:mb-10 text-md sm:text-2xl tracking-wide sm:tracking-wider uppercase"
          style="color: #1379a8"
          :start-delay="500"
          @onStringTyped="disableCursor('h2')"
        >
          <h2 class="typing font-semibold text-center sm:text-left" />
        </vue-typed-js>

        <transition
          enter-active-class="transform transition-all duration-700 ease-out"
          enter-class="opacity-0 translate-y-20"
          enter-to-class="opacity-100 translate-y-0"
        >
          <p
            v-if="h2Complete"
            class="pl-1 text-lg text-gray-600 font-medium mb-14 md:mb-20 text-md w-3/4 md:w-1/2 lg:w-1/3 leading-relaxed"
          >
            I combine full-stack JavaScript with cloud technology to design and
            build high performance web applications.
          </p>
        </transition>

        <transition
          enter-active-class="transform transition-all button-transition duration-1000 ease-out"
          enter-class="opacity-0 translate-y-20"
          enter-to-class="opacity-100 translate-y-0"
        >
          <Button
            :is-displayed="h2Complete"
            button-text="Let's work together!"
            button-classes="px-6 py-3"
            text-classes="font-semibold"
          />
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import Button from "../components/Button.vue";
import { VueTypedJs } from "vue-typed-js";

export default {
  components: {
    TheHeader,
    Button,
    VueTypedJs,
  },
  metaInfo: {
    title: "Hello, world!",
  },
  data() {
    return {
      h1Complete: false,
      h2Complete: false,
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

<style>
.button-transition {
  transition-delay: 2s;
}
</style>
