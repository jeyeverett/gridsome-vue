---
slug: "second-post"
date: "2020-07-03"
title: "Code Coloring"
author:
  name: "jeysen-freedman"
  bio: "Full Stack Web Developer and Designer"
  image: ../../media/jeysen-freedman.jpg
tags: ["backend", "coding"]
summary: "I'm baby chartreuse knausgaard gastropub deep v mlkshk pickled crucifix chicharrones meggings."
pillar: "first-series"
pillarContent:
  image: ""
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempore nemo delectus dignissimos laboriosam maiores quod. Necessitatibus unde quod dolore aliquam, numquam beatae assumenda? Ab itaque cupiditate delectus doloremque officia!"
image:
  path: ./media/test-image.jpg
  alt: "A typewriter and notebooks laid out on a table"
  caption: 'Photo by <a href="https://unsplash.com/@retrosupply?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"><em>RetroSupply</em></a> on <a href="https://unsplash.com/s/photos/blog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"><em>Unsplash</em></a>'
---

> _This is part two of our test series. [Find the full series here](/blog/first-series)._

### This should be a heading 3

I'm baby chartreuse knausgaard gastropub deep v mlkshk pickled crucifix chicharrones meggings. Listicle jianbing tbh sriracha tofu, waistcoat post-ironic copper mug williamsburg scenester. Banh mi tilde swag beard. PBR&B disrupt affogato 8-bit fanny pack. Tacos fam brooklyn jean shorts. Taiyaki fam +1 tote bag chia palo santo.

**This is bold**

Banh mi authentic fashion axe affogato shoreditch umami bicycle rights keytar put a bird on it drinking vinegar pitchfork taxidermy. Synth pinterest bespoke, taiyaki williamsburg chambray cloud bread readymade.

```vue
<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-2">{{ $page.post.title }}</h1>
    <span class="font-light">{{ $page.post.date }}</span>
    <div class="mt-8 mb-16 markdown" v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style src="../css/markdown.css" />
```

## This should be a heading 2

> This should be a block quote

Selvage twee viral, lyft chartreuse swag crucifix hexagon lo-fi meggings literally. Jianbing knausgaard vexillologist, sustainable yr twee tote bag cray keytar schlitz slow-carb DIY dreamcatcher brooklyn listicle. Chambray letterpress flexitarian meditation gentrify. Single-origin coffee lyft iPhone street art, hot chicken yr live-edge gentrify waistcoat.
