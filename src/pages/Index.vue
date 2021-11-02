<template>
  <div class="bg-hero-pattern h-screen pt-6">
    <the-header style="marginTop: 0;" />
    <section class="px-20 py-10">
      <div class="ml-36">
        <vue-typed-js
          :strings="['Hi, ^500I\'m Jeysen.']"
          class="mb-2 text-6xl font-bold tracking-tight"
          style="color: #1379a8"
          :startDelay="1000"
          @onStringTyped="disableCursor('h1')"
          id="h1"
        >
          <h1 class="typing" />
        </vue-typed-js>
        <vue-typed-js
          :strings="['Full Stack Web Developer']"
          class="pl-1 mb-10 text-2xl tracking-wider uppercase"
          style="color: #1379a8"
          :startDelay="500"
          @onStringTyped="disableCursor('h2')"
          id="h2"
          v-if="h1Complete"
        >
          <h2 class="typing font-semibold" />
        </vue-typed-js>

        <vue-typed-js
          :strings="[
            'Do you need a blazing fast website from the future?^300',
            'Do you want to build a robust web application that delivers real value to users?^300',
            'Do you dream of using powerful modern web technologies to solve real problems, supercharge your business and reach a global audience?',
          ]"
          class="pl-1 mb-20 text-md w-3/6"
          :startDelay="500"
          :typeSpeed="25"
          :showCursor="false"
          @onComplete="disableCursor('p')"
          id="p"
          v-if="h2Complete"
        >
          <p class="typing" />
        </vue-typed-js>

        <transition
          enter-active-class="transition-all delay-1000 duration-700 ease-out"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
        >
          <g-link
            to="/"
            class="text-white px-6 py-3 bg-blue border border-blue rounded hover:shadow-lg hover:bg-blue-dark hover:border-blue-dark transition-all"
            v-if="pComplete"
          >
            <span class="typing text-inherit font-semibold">
              Let's work together!
            </span>
          </g-link>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import { VueTypedJs } from "vue-typed-js";

export default {
  components: {
    TheHeader,
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
      animate: false,
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
    animateButton() {
      this.animate = true;
    },
  },
};
</script>
