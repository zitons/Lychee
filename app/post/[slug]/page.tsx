/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-01
 * @FilePath: /AisCai-Lab/app/post/[slug]/page.tsx
 * Helllllloo
 */

export default async function Blog({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await fetch(
    `http://137.184.36.245:18281/index.php?rest_route=/wp/v2/posts&slug=${slug}`,
    {
      headers: { Accept: "application/json" },
    }
  ).then((response) => response.json());

  // console.log("API Response:", data);

  // 确保 data 是数组并且有内容
  const post = Array.isArray(data) && data.length > 0 ? data[0] : null;

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main>
      <div>
        <h1 className="text-4xl font-bold mb-2">{post.title.rendered}</h1>
        <time dateTime={post.modified}>{post.modified}</time>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </main>
  );
}   