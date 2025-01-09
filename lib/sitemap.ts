import { globby } from "globby";
import { writeFileSync } from "fs";

export default async function generate() {
  const pages = await globby([
    "pages/*.tsx",
    "!pages/_*.tsx",
    "!pages/api",
    "!pages/404.tsx",
  ]);

  const pagesRoute = pages.map((page: string) => {
    const path = page.replace("pages", "").replace(".tsx", "");
    const route = path === "/index" ? "" : path;
    return route;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${[...pagesRoute]
          .map((route) => {
            return `
              <url>
                  <loc>${`https://notblue.fr${route}`}</loc>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", sitemap);
}