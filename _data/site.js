module.exports = {
  meta: {
    title: "The 8 bits of happiness",
    description: "The universe if information",
    lang: "en",
    siteUrl: "https://pcnoic.github.io/blog",
  },
  feed: { // used in feed.xml.njk
    subtitle: "The 8 bits of happiness",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://pcnoic.github.io/blog",
    authorName: "Christos Alexiou",
    authorEmail: "pcnoic@gmail.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "welcome stranger...",
    description: "here you will find random thoughts about specific topics"
  }
}