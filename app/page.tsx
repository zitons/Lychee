/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-02
 * @FilePath: /AisCai-Lab/app/page.tsx
 * Helllllloo
 */
// interface indexPages {
//   id: number;
//   title: string;
//   intro: string;
// }

// interface results {
//   id: number;
//   meta: {
//     slug: string;
//   };
//   title: string;
//   date: string;
//   intro: string;
// }
import Head from "@/components/head";
import Main from "@/components/main";
interface PostData {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  featured_image_url?: string;
  cover?: string;
  tags: number[];
  tag: number[];
  sort: string;
  categories: string;
  // cat_name:unknown;
}

interface PostResult {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
  cover?: string;
  tag: number[];
  sort: string;
}

export default async function BlogIndex() {
  // Fetch the BlogIndexPage's details
  const indexPages = await fetch(
    `http://137.184.36.245:18281/index.php?rest_route=/wp/v2/posts&page=1`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  ).then((response) => response.json());
  //上面是获取文章标题等信息，下面是获取tag列表
  const tags = await fetch(
    "http://137.184.36.245:18281/index.php?rest_route=/wp/v2/tags",
    {
      headers: {
        Accept: "application/json",
      },
    }
  ).then((response) => response.json());
  const hello = await fetch("http://v1.hitokoto.cn/?c=i");
  const hitokoto = await hello.text;
  console.log(hitokoto);
  console.log(tags);
  console.log(indexPages);
  const results: PostResult[] = indexPages.map((data: PostData) => {
    return {
      id: data.id,
      title: data.title.rendered,
      slug: data.slug,
      date: new Date(data.date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
      }),
      cover: data.featured_image_url,
      tag: data.tags,
      sort: data.categories[0],
    };
  });
  console.log(results);
  console.log(indexPages);

  return (
    <main>
      <Head abc={indexPages} />
      <div className="mb-8">
        <Main PostData={results} TagItem={tags} />
      </div>
    </main>
  );
}
