<template>
  <Layout>
    <section
      class="flex flex-col justify-between items-center mt-10 relative pb-10"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center"
      >
        <span class="sm:w-3/4 md:w-full">
          <h1 class="text-5xl font-semibold text-blue mb-4">Hi there!</h1>
          <p class="pl-1 font-medium text-gray-700 dark:text-white">
            Driven to design high performance web applications that solve real
            world problems, I am fuelled by delivering excellent work and
            constantly expanding my skillset.
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
      <section class="my-20 w-full">
        <span class="flex justify-between px-4 sm:px-12">
          <a href="https://vuejs.org/" target="_blank">
            <g-image
              alt="Jeysen Freedman"
              src="../../content/media/vue.png"
              class="w-16 filter grayscale"
              title="vuejs"
            />
          </a>

          <a href="https://gridsome.org/" target="_blank">
            <g-image
              alt="Jeysen Freedman"
              src="../../content/media/gridsome.png"
              class="w-16 p-2 filter grayscale"
              title="gridsome"
            />
          </a>

          <a href="https://tailwindcss.com/" target="_blank">
            <g-image
              alt="Jeysen Freedman"
              src="../../content/media/tailwind.png"
              class="w-16 p-2 filter grayscale"
              title="tailwindcss"
            />
          </a>
          <a href="https://www.netlify.com/" target="_blank">
            <g-image
              alt="Jeysen Freedman"
              src="../../content/media/netlify.svg"
              class="w-16 p-2 filter grayscale"
              title="netlify"
            />
          </a>

          <a href="https://github.com/" target="_blank">
            <g-image
              alt="Jeysen Freedman"
              src="../../content/media/github.png"
              class="w-16 p-2 filter grayscale"
              title="github"
            />
          </a>
        </span>
      </section>
      <section class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <span class="px-8 sm:px-16 md:px-0 lg:px-8 py-4 mb-2">
          <PersonIcon
            classes="h-32 w-32 text-gray-500 dark:text-gray-200 mx-auto mb-10"
          />
          <h4
            class="text-xl font-semibold text-gray-700 dark:text-white mb-2 uppercase tracking-wider"
          >
            Background
          </h4>
          <p class="font-medium leading-relaxed text-gray-700 dark:text-white">
            I'm a full stack developer with 10+ years of experience in
            technology, engineering and project management. I specialize in
            deploying full stack JavaScript applications on cloud infrastructure
            to create highly performant and scalable web solutions.
          </p>
        </span>
        <span class="px-8 sm:px-16 md:px-0 py-4 mb-2">
          <EarthIcon
            classes="h-32 w-32 text-gray-500 dark:text-gray-200 mx-auto mb-10"
          />
          <h4
            class="text-xl font-semibold text-gray-700 dark:text-white mb-2 uppercase tracking-wider"
          >
            Mission
          </h4>
          <p class="font-medium leading-relaxed">
            I'm interested in applying web technologies to solve problems
            related to local agriculture, renewable energy, sustainable housing,
            and mental health. I want to help people and businesses use the web
            to empower and transform their lives.
          </p>
        </span>
        <span class="px-8 sm:px-16 md:px-0 py-4 mb-2">
          <IdIcon
            classes="h-32 w-32 text-gray-500 dark:text-gray-200 mx-auto mb-10"
          />
          <h4
            class="text-xl font-semibold text-gray-700 dark:text-white mb-2 uppercase tracking-wider"
          >
            Personal
          </h4>
          <p class="font-medium leading-relaxed text-gray-700 dark:text-white">
            Outside of the web I love carpentry, gardening, reading, movies, and
            spending time in nature. I value the freedom and opportunity being a
            web professional offers and I aim to unite a technical career with a
            natural and sustainable lifestyle.
          </p>
        </span>
        <span class="px-8 sm:px-16 md:px-0 py-4 mb-2">
          <LightBulbIcon
            classes="h-32 w-32 text-gray-500 dark:text-gray-200 mx-auto mb-10"
          />
          <h4
            class="text-xl font-semibold text-gray-700 dark:text-white mb-2 uppercase tracking-wider"
          >
            Fun Fact
          </h4>
          <p class="font-medium leading-relaxed text-gray-700 dark:text-white">
            In-between my career transition from engineering consultant to web
            developer, I had the opportunity to learn timber framing and log
            building, build custom homes, and even spend a season managing a 60
            acre organic farm!
          </p>
        </span>
      </section>
    </section>
  </Layout>
</template>

<script>
import EarthIcon from "../components/icons/EarthIcon.vue";
import IdIcon from "../components/icons/IdIcon.vue";
import PersonIcon from "../components/icons/PersonIcon.vue";
import LightBulbIcon from "../components/icons/LightBulbIcon.vue";

export default {
  components: {
    EarthIcon,
    IdIcon,
    PersonIcon,
    LightBulbIcon,
  },
  metaInfo: {
    title: "About",
  },
};
</script>

<style></style>
