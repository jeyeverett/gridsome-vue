<template>
  <div
    class="bg-hero-pattern-sm md:bg-hero-pattern-md xl:bg-hero-pattern-lg h-screen pt-6 bg-cover bg-no-repeat"
  >
    <TheHeader ref="header" style="marginTop: 0;" />
    <section class="xs:px-2 sm:px-20 xs:py-10">
      <div
        class="flex flex-col items-center sm:block sm:ml-5 md:ml-10 xl:ml-36"
      >
        <VueTypedJs
          id="h1"
          :strings="['Hi, ^500I\'m Jeysen.']"
          class="mb-2 text-4xl sm:text-6xl font-bold tracking-normal sm:tracking-tight"
          style="color: #1379a8"
          :start-delay="1000"
          @onStringTyped="completeAnimation('h1')"
        >
          <h1 class="typing text-center sm:text-left" />
        </VueTypedJs>
        <VueTypedJs
          v-if="h1Complete"
          id="h2"
          :strings="['Full Stack Web Developer']"
          class="sm:pl-1 mb-5 md:mb-10 text-md sm:text-2xl tracking-wide sm:tracking-wider uppercase"
          style="color: #1379a8"
          :start-delay="500"
          @onStringTyped="completeAnimation('h2')"
        >
          <h2 class="typing font-semibold text-center sm:text-left" />
        </VueTypedJs>
        <transition appear @before-enter="beforeEnterP" @enter="enterP">
          <p
            v-if="h2Complete"
            :css="false"
            class="xs:pl-1 text-sm text-center sm:text-left xs:text-base sm:text-lg text-gray-600 font-medium mb-8 xs:mb-14 md:mb-20 text-md w-3/4 md:w-1/2 lg:w-1/3 leading-relaxed "
          >
            I combine full stack JavaScript with cloud technology to design and
            build high performance web applications.
          </p>
        </transition>

        <transition @before-enter="beforeAnimateButton" @enter="animateButton">
          <Button
            v-if="pComplete"
            appear
            button-text="Let's work together!"
            button-classes="px-6 py-3"
            text-classes="font-semibold"
            @click="toggleModal"
          />
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTypedJs } from "vue-typed-js";
import gsap from "gsap";
import TheHeader from "../components/TheHeader.vue";
import Button from "../components/Button.vue";
import Utils from "../mixins/Utils.vue";

export default {
  components: {
    TheHeader,
    Button,
    VueTypedJs,
  },
  mixins: [Utils],
  metaInfo: {
    title: "Welcome!",
  },
  data() {
    return {
      h1Complete: false,
      h2Complete: false,
      pComplete: false,
    };
  },
  mounted() {
    this.setTheme("light");
  },
  methods: {
    toggleModal() {
      this.$refs.header.toggleModal();
    },
    beforeEnterP(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0,0)";
    },
    enterP(el, done) {
      gsap.to(el, {
        duration: 0.75,
        opacity: 1,
        scale: 1,
        ease: "power1",
        onComplete: () => {
          setTimeout(
            () => this.completeAnimation(el.tagName.toLowerCase()),
            1750
          );
          done();
        },
      });
    },
    beforeAnimateButton(el) {
      gsap.from(el, {
        opacity: 0,
        scale: 0,
        y: 200,
      });
    },
    animateButton(el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power1",
        onComplete: () => {
          this.completeAnimation(el.tagName.toLowerCase());
          done();
        },
      });
    },
    completeAnimation(id) {
      if (id === "h1" || id === "h2") {
        this.disableCursor(id);
      }
      this[id + "Complete"] = true;
    },
    disableCursor(id) {
      const container = document.getElementById(id);
      container.removeChild(container.lastChild);
    },
  },
};
</script>

<style>
.button-transition {
  transition-delay: 2s;
}
</style>
