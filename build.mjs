#!/usr/bin/env zx

import "zx/globals";

const blog_dir = "./blog/";
const dir = fs.readdirSync(blog_dir);

dir.forEach((file) => {
  try {
    const post = fs
      .readFileSync(path.join("./", "blog", file))
      .toString("utf-8");
    const lines = post.split("\n");

    console.log("POST", lines);
  } catch {}
});
