<template>
  <Layout>
    <section
      class="flex flex-col justify-between items-center mt-4 xs:mt-10 relative"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center snippets"
      >
        <span class="sm:w-3/4 md:w-full">
          <h1 class="text-5xl font-semibold text-blue mb-4">
            Hi there!
          </h1>
          <p class="pl-1 font-medium text-gray-700 dark:text-white">
            Driven to design high performance web applications that solve real
            world problems, I'm fueled by delivering excellent work and
            constantly expanding my skillset.
            <!-- Driven to solve real world problems with innovative web applications, I'm fueled by delivering excellent work and constantly expanding my skillset. -->
          </p>
          <p class="pl-1 font-medium text-gray-700 dark:text-white mt-2">
            Learn more about me below.
          </p>
        </span>
        <g-image
          alt="Jeysen Freedman"
          src="/images/farm-selfie.jpg"
          class="rounded shadow w-80 order-first mb-4 md:mb-0 md:order-none"
          height="200"
          width="200"
        />
      </div>
      <hr class="mt-10 sm:mt-20 text-gray-900 w-full snippets" />
      <section
        class="grid grid-cols-1 md:grid-cols-2 md:gap-12 xl:gap-16 pt-10 sm:pt-20"
      >
        <article class="px-2 xs:px-8 sm:px-16 md:px-0 py-4 snippets">
          <PersonIcon
            classes="h-32 w-32 text-gray-500 dark:text-gray-200 mx-auto mb-2 md:mb-8 xl:mb-10"
          />
          <h4
            class="text-xl text-center font-semibold text-gray-700 dark:text-white mb-2 uppercase tracking-wider"
          >
            Background
          </h4>
          <p
            class="font-medium leading-relaxed text-gray-700 dark:text-white md:px-2 text-justify"
          >
            I'm a full stack developer with 10+ years of experience in science,
            technology and engineering. I'm focused on using JavaScript and
            cloud technologies to build high performance, scalable web solutions
            that contribute to the evolution of the web. I'm passionate about
            education, engineering and design.
          </p>
        </article>
        <article class="px-2 xs:px-8 sm:px-16 md:px-0 py-4 snippets">
          <EarthIcon
            classes="h-32 w-32 text-gray-500 dark:text-gray-200 mx-auto mb-2 md:mb-8 xl:mb-10"
          />
          <h4
            class="text-xl text-center font-semibold text-gray-700 dark:text-white mb-2 uppercase tracking-wider"
          >
            Mission
          </h4>
          <p
            class="font-medium leading-relaxed text-gray-700 dark:text-white md:px-2 text-justify"
          >
            I can't think of a better way to spend my days than helping people
            use the web in meaningful ways. I'm interested in how the web can
            enhance society, particularly through its potential for maximizing
            our freedom and helping us live healthy and fulfilling lives.
          </p>
        </article>
        <article class="px-2 xs:px-8 sm:px-16 md:px-0 pb-4 snippets">
          <IdIcon
            classes="h-32 w-32 text-gray-500 dark:text-gray-200 mx-auto mb-2 md:mb-8 xl:mb-10"
          />
          <h4
            class="text-xl text-center font-semibold text-gray-700 dark:text-white mb-2 uppercase tracking-wider"
          >
            Personal
          </h4>
          <p
            class="font-medium leading-relaxed text-gray-700 dark:text-white md:px-2 text-justify"
          >
            Outside of the web I love carpentry, gardening, reading, movies, and
            spending time in nature. I value the freedom and opportunity being a
            web professional offers and I aim to unite a technical career with a
            natural and sustainable lifestyle.
          </p>
        </article>
        <article class="px-2 xs:px-8 sm:px-16 md:px-0 pb-4 snippets">
          <LightBulbIcon
            classes="h-32 w-32 text-gray-500 dark:text-gray-200 mx-auto mb-2 md:mb-8 xl:mb-10"
          />
          <h4
            class="text-xl text-center font-semibold text-gray-700 dark:text-white mb-2 uppercase tracking-wider"
          >
            Fun Fact
          </h4>
          <p
            class="font-medium leading-relaxed text-gray-700 dark:text-white md:px-2 text-justify"
          >
            During my transition from engineering consultant to web developer, I
            had the opportunity to attend the Island School of Building Arts,
            learn timber framing and log building, build custom homes, and spend
            a season managing a 60 acre organic farm.
          </p>
        </article>
      </section>
      <section class="mt-6 xs:mt-10 sm:mt-20 w-full">
        <span class="flex flex-wrap justify-between px-4 sm:px-12">
          <a
            href="https://reactjs.org/"
            target="_blank"
            class="flex items-center snippets"
            title="reactjs"
          >
            <ReactIcon />
          </a>
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="flex items-center snippets"
            title="vuejs"
          >
            <VueIcon />
          </a>

          <a
            href="https://aws.amazon.com/"
            target="_blank"
            class="flex items-center snippets"
            title="amazon web services"
          >
            <AWSIcon />
          </a>

          <a
            href="https://mongodb.com/"
            target="_blank"
            class="flex items-center snippets"
            title="mongodb"
          >
            <MongoIcon />
          </a>

          <a
            href="https://nodejs.org/"
            target="_blank"
            class="flex items-center snippets"
            title="nodejs"
          >
            <NodeIcon />
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            class="flex items-center snippets"
            title="firebase"
          >
            <FirebaseIcon />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            class="flex items-center snippets"
            title="javascript"
          >
            <JavaScriptIcon />
          </a>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            class="flex items-center snippets"
            title="postgres"
          >
            <PostgresIcon />
          </a>
        </span>
      </section>
    </section>
  </Layout>
</template>

<script>
import gsap from "gsap";
import EarthIcon from "../components/icons/EarthIcon.vue";
import IdIcon from "../components/icons/IdIcon.vue";
import PersonIcon from "../components/icons/PersonIcon.vue";
import LightBulbIcon from "../components/icons/LightBulbIcon.vue";
import NodeIcon from "../components/icons/NodeIcon.vue";
import PostgresIcon from "../components/icons/PostgresIcon.vue";
import ReactIcon from "../components/icons/ReactIcon.vue";
import JavaScriptIcon from "../components/icons/JavaScriptIcon.vue";
import AWSIcon from "../components/icons/AWSIcon.vue";
import MongoIcon from "../components/icons/MongoIcon.vue";
import VueIcon from "../components/icons/VueIcon.vue";
import FirebaseIcon from "../components/icons/FirebaseIcon.vue";

export default {
  components: {
    EarthIcon,
    IdIcon,
    PersonIcon,
    LightBulbIcon,
    NodeIcon,
    PostgresIcon,
    ReactIcon,
    JavaScriptIcon,
    AWSIcon,
    MongoIcon,
    VueIcon,
    FirebaseIcon,
  },
  metaInfo: {
    title: "About",
  },
  mounted() {
    gsap.from(".snippets", {
      duration: 0.75,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: "power1",
      stagger: 0.25,
    });
  },
};
</script>

<style></style>
