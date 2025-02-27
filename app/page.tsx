/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-27
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
    `http://137.184.36.245:18281/index.php?rest_route=/wp/v2/posts&page=1`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  ).then((response) => response.json());
  const results = indexPages.map((data) => {
    return {
      id: data.id,
      title: data.title.rendered,
      title_slug: data.slug,
      date: data.date,
      cover: data.featured_image_url,
      tag: data.tags,
      sort: data.categories,
    };
  });
  console.log(results);
  console.log(indexPages);

  return (
    <main>
      <Head abc={indexPages} />
      <div className="mb-8">
        <Main PostData={results} />
        {/* <h1 className="text-4xl font-bold mb-2">{index.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: index.intro }}></div> */}
      </div>
      {/* The rest is the same as the previous example */}
      {/* <ul>
        {indexPages.map((child: any) => (
          <li key={child.id} className="mb-4">
            <a className="underline" href={``}>
              <h2>{child.title.rendered}</h2>
            </a>
            <time dateTime={child.modified}>{child.modified}</time>

            <p>{child.featured_image_url}</p>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
