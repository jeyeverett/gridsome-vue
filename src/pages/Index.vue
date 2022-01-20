<template>
  <div
    class="bg-hero-pattern-sm sm:bg-hero-pattern-md xl:bg-hero-pattern-lg h-screen pt-6 bg-cover bg-no-repeat overflow-hidden bg-bottom md:bg-center"
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
          class="sm:pl-1 mb-5 md:mb-10 text-md sm:text-2xl font-semibold tracking-wide sm:tracking-wider uppercase"
          style="color: #1379a8"
          :start-delay="500"
          @onStringTyped="completeAnimation('h2')"
        >
          <h2 class="typing font-semibold text-center sm:text-left" />
        </VueTypedJs>
        <transition-group
          name="about"
          tag="p"
          class="xs:pl-1 text-center sm:text-left xs:text-base sm:text-lg text-gray-600 font-medium mb-8 md:mb-12 text-md w-96 leading-relaxed"
          v-if="h2Complete"
          @before-enter="beforeEnterP"
          @enter="enterP"
          appear
        >
          <span
            v-for="fragment in fragments"
            :key="fragment"
            class="inline-block break-words"
            style="margin-right: 3.2px;"
          >
            {{ fragment }}
          </span>
        </transition-group>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <Button
            v-if="spanComplete"
            :css="false"
            button-text="Let's work together"
            button-classes="px-6 py-3"
            text-classes="font-semibold"
            :class="buttonComplete ? 'transition-all' : ''"
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
      spanComplete: false,
      buttonComplete: false,
      fragments: [],
    };
  },
  mounted() {
    this.setTheme("light");
  },
  methods: {
    toggleModal() {
      this.$refs.header.toggleModal();
    },
    beforeEnter(el) {
      gsap.from(el, {
        opacity: 1,
        y: -50,
        scale: el.tagName.toLowerCase() === "button" ? 0 : 1,
      });
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 0.75,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power1",
        onComplete: () => {
          setTimeout(
            () => this.completeAnimation(el.tagName.toLowerCase()),
            1250
          );
          done();
        },
      });
    },
    beforeEnterP(el) {
      gsap.from(el, {
        opacity: 0,
        x: Math.round((Math.random() - 0.5) * 400 + 10),
        y: Math.round(Math.random() * 500),
      });
      console.log(el.style);
    },
    enterP(el, done) {
      gsap.to(el, {
        duration: 1.25,
        opacity: 1,
        x: 0,
        y: 0,
        stagger: 0.75,
        ease: "power1",
        onComplete: () => {
          setTimeout(
            () => this.completeAnimation(el.tagName.toLowerCase()),
            1250
          );
          done();
        },
      });
    },
    completeAnimation(id) {
      if (id === "h1" || id === "h2") {
        this.disableCursor(id);
      }
      this[id + "Complete"] = true;

      if (this.h2Complete) {
        this.fragments = [
          "I combine",
          "full stack JavaScript",
          "with",
          "cloud technology",
          "to design and build",
          "high performance",
          "web applications.",
        ];
      }
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
/* .about-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.about-enter, .about-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.about-leave-active {
  position: absolute;
} */
</style>
