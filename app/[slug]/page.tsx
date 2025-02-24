/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-24
 * @FilePath: /AisCai-Lab/app/[slug]/page.tsx
 * Helllllloo
 */

export default async function Blog({
    params: { slug },
}: {
    params: { slug: string };
}) {
    // Fetch the BlogPage's details based on the slug

    // Fetch the BlogPage's details based on the slug
    const data = await fetch(
        `http://137.184.36.245:18281/index.php?rest_route=/wp/v2/posts/${slug}`,
        {
            headers: {
                Accept: "application/json",
            },
        }
    ).then((response) => response.json());

    // const post: BlogPage = data.items[0];
    // function addTextToEmbedAlt(html: any, textToAdd: any, textToAdd2: any) {
    //     // 使用正则表达式查找带 alt 属性的 embed 标签，并修改其 alt 属性
    //     return html.replace(/(<embed[^>]*alt=")([^"]*)(")/g, (match: any, p1: any, p2: any, p3: any) => {
    //         // 将 alt 的内容加上指定的 textToAdd 和 textToAdd2
    //         const newAltValue = textToAdd + p2 + textToAdd2;

    //         // 将 alt 改为 src，并且保持原有的值
    //         return match.replace(`alt="${p2}"`, `src="${newAltValue}"`);
    //     });
    // }



    return (
        <main>
            <div>
                <h1 className="text-4xl font-bold mb-2">{data.title.rendered}</h1>
                <time dateTime={data.modified.date}>
                    {data.modified.date}
                </time>
                {/* <p className="my-4">{post.intro}</p> */}
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
        </main>
    );

}