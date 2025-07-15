
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { remarkReadingTime } from "./src/utils/all";

import serviceWorker from "astrojs-service-worker";

const __unconfig_default =  defineConfig({
  site: "https://mytopcountries.web.app/",
  experimental: {
    contentCollections: true,
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: ["rehype-plugin-image-native-lazy-loading"],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    [serviceWorker()],
  ],
});



if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;