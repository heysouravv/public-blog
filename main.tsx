/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "sourav padhi",
  description: "life's a sitcom; i'm improvising.",
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
