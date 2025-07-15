declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"australia.md": {
  id: "australia.md",
  slug: "australia",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"greece.md": {
  id: "greece.md",
  slug: "greece",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"india.md": {
  id: "india.md",
  slug: "india",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"morocco.md": {
  id: "morocco.md",
  slug: "morocco",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"pandemic.md": {
  id: "pandemic.md",
  slug: "pandemic",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"peru.md": {
  id: "peru.md",
  slug: "peru",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"philippines.md": {
  id: "philippines.md",
  slug: "philippines",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ramadan.md": {
  id: "ramadan.md",
  slug: "ramadan",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"rome.md": {
  id: "rome.md",
  slug: "rome",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sabbatical.md": {
  id: "sabbatical.md",
  slug: "sabbatical",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"thailand.md": {
  id: "thailand.md",
  slug: "thailand",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"top-countries.md": {
  id: "top-countries.md",
  slug: "top-countries",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"travel.md": {
  id: "travel.md",
  slug: "travel",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"trending.md": {
  id: "trending.md",
  slug: "trending",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"vietnam.md": {
  id: "vietnam.md",
  slug: "vietnam",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"vungtau.md": {
  id: "vungtau.md",
  slug: "vungtau",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("./config");
}
