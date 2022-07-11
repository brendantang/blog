/** @jsx h */
import blog, { h } from "https://deno.land/x/blog@0.4.0/blog.tsx";

const footer = 
    <footer class="mt8 border-t-1 pt-12 border-gray-300/80">
      <img src="glasses.svg"/>
      
    </footer>

blog({
  title: "Brendan Tang",
  description: "Some of my programming notes",
  avatar: "sigh.jpg",
  //avatarClass: "bg-yellow-200 bg-contain rounded-full",
  //header: <header><img src="zoned_in.svg"/></header>,
  //footer: footer,
  author: "Brendan Tang",
  favicon: "favicon.ico",
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
