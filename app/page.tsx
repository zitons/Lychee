/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-22
 * @FilePath: /AisCai-Lab/app/page.tsx
 * Helllllloo
 */
interface BlogIndexPage {
  id: number;
  title: string;
  intro: string;
}

interface BlogPage {
  id: number;
  meta: {
    slug: string;
  };
  title: string;
  date: string;
  intro: string;
}
import Head from "@/components/head";
import Main from "@/components/main";
export default async function BlogIndex() {
  // Fetch the BlogIndexPage's details
  const indexPages = await fetch(
    `http://137.184.36.245:8000/api/v2/pages/?${new URLSearchParams({
      type: "blog.BlogIndexPage",
      slug: "blog",
      fields: "intro",
    })}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  ).then((response) => response.json());

  // There's only one with the slug "blog"
  const index: BlogIndexPage = indexPages.items[0];

  // Fetch the BlogPages that are children of the BlogIndexPage instance
  const data = await fetch(
    `http://137.184.36.245:8000/api/v2/pages/?${new URLSearchParams({
      type: "blog.BlogPage",
      child_of: index.id.toString(),
      fields: ["date", "intro","feed_image"].join(","),
    })}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  ).then((response) => response.json());

  // Use BlogPage instances as the posts
  const posts: BlogPage[] = data.items;
  console.log(index);
  console.log(posts);
  return (
    <main>
      <Head abc={index} />
      <Main PostData={posts} />
    </main>
  );
}
