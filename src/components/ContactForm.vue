<template>
  <form @submit.prevent="sendMessage" class="flex flex-col">
    <fieldset class="relative mb-2">
      <label
        v-if="!email.length"
        for="email"
        class="absolute left-2 pt-0.5 text-gray-900 text-sm font-medium uppercase tracking-wider cursor-text select-none"
      >
        Your Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        v-model="email"
        class="bg-gray-400 rounded-sm shadow text-gray-900 w-full font-semibold text-sm px-2 py-0.5"
        required
      />
    </fieldset>
    <fieldset class="relative mb-2">
      <label
        v-if="!message.length"
        for="message"
        class="absolute left-2 pt-0.5 text-gray-900 text-sm font-medium uppercase tracking-wider cursor-text select-none"
      >
        Message
      </label>
      <textarea
        type="text"
        id="message"
        name="message"
        v-model="message"
        minLength="100"
        required
        class="bg-gray-400 rounded-sm shadow resize-none h-20 w-full text-gray-900 font-semibold px-2 py-0.5 text-sm"
      />
    </fieldset>
    <div class="relative">
      <button
        class="border border-gray-200 text-gray-200 uppercase tracking-wide text-sm rounded hover:bg-gray-500 transition-all shadow w-full"
      >
        Send
      </button>
      <transition>
        <p
          class="text-sm text-white text-center w-full absolute top-8"
          v-if="sent"
        >
          Your message has been sent!
        </p>
      </transition>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      sent: false,
    };
  },
  methods: {
    async sendMessage() {
      if (this.email.length && this.message.length > 100) {
        try {
          const res = await fetch("https://formspree.io/f/mleaelay", {
            method: "POST",
            body: JSON.stringify({
              data: { email: this.email, message: this.message },
            }),
            headers: {
              Accept: "application/json",
            },
          });
          if (res.ok) {
            this.email = "";
            this.message = "";
            this.sent = true;
            setTimeout(() => (this.sent = false), 2000);
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

<style scoped>
#message::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

#message::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

#message::-webkit-scrollbar-thumb {
  background-color: rgba(24, 24, 27, 0.7);
  border-radius: 1px;
}

@keyframes notification {
  0% {
    opacity: 0;
    transform: translateY(-25px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.v-enter-active {
  animation: notification 0.3s ease-out;
}

.v-leave-active {
  animation: notification 0.3s ease-in reverse;
}
</style>
