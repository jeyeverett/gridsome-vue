<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
import Utils from "./Utils.vue";

export default {
  mixins: [Utils],
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const postPath = this.$page.post.path;
    const image = this.$page.post.image?.path;
    const imageAlt = this.$page.post.image?.alt;
    const imagePath = image ? `${siteUrl}${image.src}` : "";

    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.summary,
        },
        {
          key: "keywords",
          name: "keywords",
          content: this.$page.post.tags.reduce((acc, curr, index) => {
            if (index === 0) return curr.title;
            return acc + ", " + curr.title;
          }, ""),
        },
        {
          key: "author",
          name: "author",
          content: this.unSlugify(this.$page.post.author.title.name),
        },
        { key: "og:url", property: "og:url", content: `${siteUrl}${postPath}` },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.post.title,
        },
        {
          key: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.post.summary,
        },
        {
          key: "og:image",
          property: "og:image",
          content: imagePath,
        },
        {
          key: "og:image:width",
          property: "og:image:width",
          content: image ? image.size.width : "",
        },
        {
          key: "og:image:height",
          property: "og:image:height",
          content: image ? image.size.height : "",
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.summary,
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: image ? "summary_large_image" : "summary",
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: imagePath,
        },
        {
          key: "twitter:image:alt",
          property: "twitter:image:alt",
          content: imageAlt,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.post.title,
        },
        {
          key: "twitter:site",
          property: "twitter:site",
          content: "@jeysenfreedman",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            description: this.$page.post.summary,
            datePublished: this.$page.post.date,
            author: {
              name: this.unSlugify(this.$page.post.author.title.name),
            },
            headline: this.$page.post.title,
            image: imagePath,
          },
        },
      ],
    };
  },
};
</script>
