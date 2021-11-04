<template>
  <Layout>
    <h1 class="heading-primary">About</h1>
    <section
      class="flex flex-col justify-between items-center mt-10 sm:mt-16 relative"
    >
      <g-image
        alt="Jeysen Freedman"
        src="../../content/media/jeysen-freedman.jpg"
        class="rounded-full "
        height="200"
        width="200"
      />
      <p class="w-4/5 font-medium text-center mt-10">
        I'm a full stack developer and web designer with 10+ years of experience
        in science, technology and engineering. I love learning and this love
        fueled my transition from engineering consulting into web development.
        I'm interested in applying web technologies to solve problems related to
        local agriculture, renewable energy, sustainable construction, mental
        health, and much more!
      </p>
    </section>
    <section class="my-20">
      <h2 class="text-xl text-gray-500 font-medium mb-10">
        Website:
      </h2>
      <span class="flex justify-between ">
        <a href="https://vuejs.org/" target="_blank">
          <g-image
            alt="Jeysen Freedman"
            src="../../content/media/vue.png"
            class="w-28 filter grayscale"
            title="vuejs"
          />
        </a>

        <a href="https://gridsome.org/" target="_blank">
          <g-image
            alt="Jeysen Freedman"
            src="../../content/media/gridsome.png"
            class="w-28 p-2 filter grayscale"
            title="gridsome"
          />
        </a>

        <a href="https://tailwindcss.com/" target="_blank">
          <g-image
            alt="Jeysen Freedman"
            src="../../content/media/tailwind.png"
            class="w-28 p-2 filter grayscale"
            title="tailwindcss"
          />
        </a>
        <a href="https://www.netlify.com/" target="_blank">
          <g-image
            alt="Jeysen Freedman"
            src="../../content/media/netlify.svg"
            class="w-28 p-2 filter grayscale"
            title="netlify"
          />
        </a>

        <a href="https://github.com/" target="_blank">
          <g-image
            alt="Jeysen Freedman"
            src="../../content/media/github.png"
            class="w-28 p-2 filter grayscale"
            title="github"
          />
        </a>
      </span>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>
