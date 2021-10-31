<script>
export default {
  methods: {
    unSlugify(slug) {
      return slug
        .split("-")
        .map((elem) => elem[0].toUpperCase() + elem.slice(1))
        .join(" ");
    },
  },
};
</script>
