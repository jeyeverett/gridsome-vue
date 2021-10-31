// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ getCollection }) => {
    const posts = getCollection("BlogPost");
    autoPublish(posts);

    const tags = getCollection("Tag");
    addTagDescriptions(tags);
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};

/*
the autoPublish function below is used to autopublish blog posts that have a future date

1. Log into Zapier and create a new Zap
2. Select "Schedule by Zapier" as the first app
3. Schedule it to "Every Day", enable "Trigger on Weekends", and set Time of Day to early morning (5am)
4. Select "Netlify" as the second app
5. Choose "Start Deploy" as the action event. You’ll need to connect with your Netlify account. Select your blog site and select "False" on "Clear Build Cache"
6. When you test this integration, you should see a new build started in Netlify
 */

const autoPublish = (posts) => {
  // We need to iterate over the posts and remove any dated for the future if in production, otherwise we prefix the post title with "DRAFT: "
  const dateNow = new Date();
  posts.data().forEach((node) => {
    if (new Date(node.date) > dateNow) {
      if (process.env.NODE_ENV === "production") {
        posts.removeNode(node.id); // must remove by node id
      } else {
        node.title = `DRAFT: ${node.title}`;
      }
    }
  });
};

const addTagDescriptions = (tags) => {
  const tagDescriptions = {
    backend:
      "Banh mi authentic fashion axe affogato shoreditch umami bicycle rights keytar put a bird on it drinking vinegar pitchfork taxidermy.",
    coding:
      "Banh mi authentic fashion axe affogato shoreditch umami bicycle rights keytar put a bird on it drinking vinegar pitchfork taxidermy.",
    freedom:
      "Banh mi authentic fashion axe affogato shoreditch umami bicycle rights keytar put a bird on it drinking vinegar pitchfork taxidermy.",
  };

  tags.data().forEach((tag) => {
    if (tagDescriptions[tag.id]) {
      tag.description = tagDescriptions[tag.id];
    }
  });
};
