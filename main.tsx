/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Sourav Padhi",
  description: "I told my computer I needed a break, and now it won't stop suggesting vacation destinations!",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  footer: <footer><br><p>thanks for visiting. feel free to reach me at <a href="https://twitter.com/savyengineer">@savyengineer</a>.</p></br></footer>,
  // avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  // avatarClass: "rounded-full",
  // author: "An author",
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
