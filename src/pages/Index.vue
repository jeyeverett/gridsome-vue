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
          @before-enter="beforeEnterP"
          @enter="enterP"
          appear
        >
          <span
            v-for="fragment in fragments"
            :key="fragment"
            class="inline-block break-words code"
            style="margin-right: 3.2px;"
          >
            {{ fragment }}
          </span>
        </transition-group>
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <VueTypedJs
            v-if="spanComplete"
            :strings="['Let\'s work together']"
            class=""
            :show-cursor="false"
            :start-delay="500"
          >
            <button
              class="typing text-white font-semibold px-6 py-3 bg-blue border border-blue rounded hover:shadow-lg hover:bg-blue-dark hover:border-blue-dark shadow-lg truncate"
              style="width: 210.8px; height: 50px;"
              :style="{ 'transition-all': buttonComplete }"
              id="button"
              @click="toggleModal"
            />
          </VueTypedJs>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTypedJs } from "vue-typed-js";
import gsap from "gsap";
import TheHeader from "../components/TheHeader.vue";
import Utils from "../mixins/Utils.vue";

export default {
  components: {
    TheHeader,
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
        scale: el.tagName.toLowerCase() === "button" || "div" ? 0 : 1,
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
        setTimeout(
          () =>
            (this.fragments = [
              "I combine",
              "full stack",
              "JavaScript",
              "with",
              "cloud technology",
              "to design and build",
              "high performance",
              "web applications.",
            ]),
          500
        );
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

.code:nth-child(3) {
  font-family: monospace;
  /* color: rgb(243 244 246); */
  /* @apply bg-gray-500 py-1 px-2 rounded; */
  @apply text-blue border-b-4 border-blue font-semibold leading-tight;
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
