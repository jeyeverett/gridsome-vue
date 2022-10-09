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
          :strings="['Be back soon!']"
          class="mt-48 mb-2 text-4xl sm:text-6xl font-bold tracking-normal sm:tracking-tight"
          style="color: #1379a8"
          :start-delay="1000"
          @onStringTyped="completeAnimation('h1')"
        >
          <h1 class="typing text-center sm:text-left" />
        </VueTypedJs>
        <VueTypedJs
          v-if="h1Complete"
          id="h2"
          :strings="['Site under maintenance']"
          class="sm:pl-1 mb-5 md:mb-10 text-md sm:text-2xl font-semibold tracking-wide sm:tracking-wider uppercase"
          style="color: #1379a8"
          :start-delay="500"
          @onStringTyped="completeAnimation('h2')"
        >
          <h2 class="typing font-semibold text-center sm:text-left" />
        </VueTypedJs>
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
    title: "Homepage",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Hi, I'm Jeysen.  I combine full stack JavaScript with cloud technology to design and build high performance web applications.",
      },
      {
        key: "keywords",
        name: "keywords",
        content:
          "web development, full stack, frontend, backend, javascript, nodejs, reactjs, vuejs, software developer, engineer",
      },
      {
        key: "author",
        name: "author",
        content: "Jeysen Freedman",
      },
      {
        key: "og:url",
        property: "og:url",
        content: "https://www.jeysenfreedman.com/",
      },
      {
        key: "og:title",
        property: "og:title",
        content: "Jeysen Freedman Full Stack Web Developer",
      },
      {
        key: "og:description",
        property: "og:description",
        content:
          "Hi, I'm Jeysen.  I combine full stack JavaScript with cloud technology to design and build high performance web applications.",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content:
          "Hi, I'm Jeysen.  I combine full stack JavaScript with cloud technology to design and build high performance web applications.",
      },
      {
        key: "twitter:card",
        name: "twitter:card",
        content: "summary",
      },
      {
        key: "twitter:title",
        property: "twitter:title",
        content: "Jeysen Freedman | Full Stack Web Developer",
      },
      {
        key: "twitter:site",
        property: "twitter:site",
        content: "@jeysenfreedman",
      },
    ],
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
