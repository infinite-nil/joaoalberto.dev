#!/usr/bin/env zx

import "zx/globals";

const BLOG_CONTENT = fs.readdirSync(path.join("./blog/"));
let index = fs.readFileSync("./index.html").toString("utf-8");
const files = BLOG_CONTENT.map((file) => ({
    name: file,
    content: fs.readFileSync(path.join("./", "blog", file)).toString("utf-8"),
}));

let links = [];

for (let i = 0; i < files.length; i++) {
    const file = files[i];

    links.push([file.name]);

    let blog_layout = fs
        .readFileSync(path.join("./", "layout", "blog.html"))
        .toString("utf-8");

    let new_content = [];
    const lines = file.content.split("\n");

    for (let line of lines) {
        const pragma = line.match(/<!--(.*?)-->/gi);

        if (pragma && pragma.length > 0) {
            const p = pragma[0];
            const t = p.split(":");
            const n = t[0].replace("<!-- ", "");
            const v = t[1].replace("-->", "");

            let regex;

            switch (n) {
                case "title":
                    regex = /<!--title-->/gi;
                    links[i].push(v.trim());
                    break;
                case "description":
                    regex = /<!--description-->/gi;
                    break;
            }

            blog_layout = blog_layout.replace(regex, v.trim());
        } else {
            new_content.push(line.trim());
        }
    }

    const new_file = blog_layout.replace("<!--content-->", new_content.join(""));
    fs.ensureDirSync(path.join("./", "build"));
    fs.writeFileSync(path.join("./", "build", file.name), new_file);
}

links = links.map((link) => `<li><a href="/${link[0]}">${link[1]}</a></li>`);
index = index.replace(/<!--blog-links-->/, links.join("\n"));

fs.writeFileSync("./build/index.html", index);

$`cp -R ./assets ./build`;
