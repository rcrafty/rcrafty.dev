import { extract } from "$std/encoding/front_matter/any.ts";
import { Post } from "../types.d.ts";
import { render } from "$gfm/mod.ts";

export async function loadPost(id: string): Promise<Post | null> {
  const raw = await Deno.readTextFile(`./content/p/${id}.md`).catch(() => null);

  if (!raw) return null;

  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;

  const post: Post = {
    id,
    title: params.title,
    body: render(body),
    date: new Date(params.date),
    excerpt: params.excerpt,
  };

  return post;
}
