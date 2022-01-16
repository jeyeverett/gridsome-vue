<template>
  <transition
    appear
    @before-enter="beforeAnimateBackdropEnter"
    @enter="animateBackdropEnter"
    @before-leave="beforeAnimateBackdropLeave"
    @leave="animateBackdropLeave"
  >
    <div v-if="isModalVisible" class="backdrop" @click="$emit('click')">
      <aside
        class="p-8 xs:p-10 sm:p-12 bg-gray-800 rounded shadow-lg w-3/4 sm:w-1/2 relative"
        @click.stop
      >
        <div
          class="absolute top-2 right-4 text-gray-200 font-semibold text-lg cursor-pointer"
          @click="$emit('click')"
        >
          x
        </div>
        <g-image
          alt="Jeysen Freedman"
          src="../../content/media/jeysen-freedman.jpg"
          width="400"
          height="400"
          class="rounded-lg w-20 mb-8 mx-auto select-none"
        />
        <h3 class="text-white uppercase text-center mb-8">Contact Me</h3>
        <ContactForm />
      </aside>
    </div>
  </transition>
</template>

<script>
import ContactForm from "./ContactForm.vue";
import gsap from "gsap";

export default {
  components: {
    ContactForm,
  },
  props: {
    isModalVisible: Boolean,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    beforeAnimateBackdropEnter(el) {
      gsap.from(el, {
        opacity: 0,
      });

      gsap.from(el.firstChild, {
        opacity: 0,
        scale: 0,
        y: 200,
      });
    },
    animateBackdropEnter(el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        ease: "power1",
        onComplete: () => {
          done();
        },
      });

      gsap.to(el.firstChild, {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power1",
        onComplete: () => {
          done();
        },
      });
    },
    beforeAnimateBackdropLeave(el) {
      gsap.from(el, {
        opacity: 1,
      });

      gsap.from(el.firstChild, {
        opacity: 1,
        scale: 1,
        y: 0,
      });
    },
    animateBackdropLeave(el, done) {
      gsap.to(el.firstChild, {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 200,
        ease: "power1",
        onComplete: () => {
          done();
        },
      });
      gsap.to(el, {
        duration: 0.5,
        opacity: 0,
        ease: "power1",
        onComplete: () => {
          done();
        },
      });
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
