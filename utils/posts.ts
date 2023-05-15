import type { Post } from "../types.d.ts";
import { extract } from "https://deno.land/std@0.184.0/front_matter/any.ts";
import { unified } from "npm:unified";
import remarkParse from "npm:remark-parse";
import remarkRehype from "npm:remark-rehype";
import rehypeStringify from "npm:rehype-stringify";
import remarkGfm from "npm:remark-gfm";

export async function loadPost(id: string): Promise<Post | null> {
  const raw = await Deno.readTextFile(`./content/posts/${id}.md`).catch(
    () => null,
  );
  if (!raw) return null;
  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(body);

  const post: Post = {
    id,
    title: params.title,
    body: String(file),
    date: new Date(params.date),
    excerpt: params.excerpt,
    tags: params.tags,
  };

  return post;
}

export async function listPosts(): Promise<Post[]> {
  const promises = [];

  for await (const entry of Deno.readDir("./content/posts")) {
    const { name } = entry;
    const [id] = name.split(".");
    if (id) promises.push(loadPost(id));
  }

  const posts = (await Promise.all(promises)) as Post[];

  posts.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });

  return posts;
}

export async function listPostsSequencially(): Promise<Post[]> {
  const posts = [];
  for await (const entry of Deno.readDir("./content/posts")) {
    const { name } = entry;
    const [id] = name.split(".");
    const post = await loadPost(id);
    if (!post) continue;
    posts.push(post);
  }
  return posts;
}
