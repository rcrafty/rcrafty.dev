import { extract } from "$std/encoding/front_matter/any.ts";
import { P } from "../types.d.ts";
import { unified } from "npm:unified";
import remarkParse from "npm:remark-parse";
import remarkRehype from "npm:remark-rehype";
import rehypeStringify from "npm:rehype-stringify";
import remarkGfm from "npm:remark-gfm";

export async function loadPost(id: string): Promise<P | null> {
  const raw = await Deno.readTextFile(`./content/p/${id}.md`).catch(() => null);

  if (!raw) return null;

  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;

const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(body);

  const post: P = {
    id,
    title: params.title,
    body: String(file),
    excerpt: params.excerpt,
  };

  return post;
}
