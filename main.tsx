/** @jsx h */
import blog, { h } from "https://deno.land/x/blog@0.4.0/blog.tsx";

blog({
  title: "Brendan Tang",
  description: "Some of my programming notes",
  avatar: "sigh.jpg",
  author: "Brendan Tang",
  favicon: "favicon.ico",
  links: [
    { title: "GitHub", url: "https://github.com/brendantang" },
    { title: "readinglist.club", url: "https://readinglist.club/brendan" },
  ],
  // middlewares: [

  // If you want to set up Google Analytics, paste your GA key here.
  // ga("UA-XXXXXXXX-X"),

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirects({
  //  "/hello_world.html": "/hello_world",
  // }),

  // ]
});
