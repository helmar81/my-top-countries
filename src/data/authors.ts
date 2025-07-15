export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Helmar Baechle",
    slug: "mario-sanchez",
    image: "./src/assets/authors/Helmar.jpg",
    bio: "I am  a self taught Front -End - Developer, who loves to build Apps with Astro.js. With a love for travel, I have visited 67 countries",
  },
  {
    name: "Helmar Baechle",
    slug: "joshua-wood",
    image: "./src/assets/authors/Helmar.jpg",
    bio: "I am  a self taught Front -End - Developer, who loves to build Apps with Astro.js. With a love for travel, I have visited 67 countries",
  },
  {
    name: "Helmar Baechle",
    slug: "erika-oliver",
    image: "./src/assets/authors/Helmar.jpg",
    bio: "I am  a self taught Front -End - Developer, who loves to build Apps with Astro.js. With a love for travel, I have visited 67 countries",
  },
];
