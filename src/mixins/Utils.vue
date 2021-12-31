<script>
export default {
  methods: {
    unSlugify(slug) {
      return slug
        .split("-")
        .map((elem) => elem[0].toUpperCase() + elem.slice(1))
        .join(" ");
    },
    setTheme(newTheme) {
      this.theme = newTheme;
      if (this.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", newTheme);
    },
  },
};
</script>
