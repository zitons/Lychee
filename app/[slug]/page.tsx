interface BlogPage {
    id: number;
    meta: {
        slug: string;
    };
    title: string;
    date: string;
    intro: string;
    body: string;
}

export default async function Blog({
    params: { slug },
}: {
    params: { slug: string };
}) {
    // Fetch the BlogPage's details based on the slug
    const data = await fetch(
        `http://137.184.36.245:8000/api/v2/pages/?${new URLSearchParams({
            slug,
            type: "blog.BlogPage",
            fields: ["date", "intro", "body"].join(","),
        })}`,
        {
            headers: {
                Accept: "application/json",
            },
        }
    ).then((response) => response.json());

    const post: BlogPage = data.items[0];
    function addTextToEmbedAlt(html: any, textToAdd: any, textToAdd2: any) {
        // 使用正则表达式查找带 alt 属性的 embed 标签，并修改其 alt 属性
        return html.replace(/(<embed[^>]*alt=")([^"]*)(")/g, (match: any, p1: any, p2: any, p3: any) => {
            // 将 alt 的内容加上指定的 textToAdd 和 textToAdd2
            const newAltValue = textToAdd + p2 + textToAdd2;

            // 将 alt 改为 src，并且保持原有的值
            return match.replace(`alt="${p2}"`, `src="${newAltValue}"`);
        });
    }



    return (
        <main>
            <div>
                <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                <time dateTime={post.date}>
                    {new Date(post.date).toDateString()}
                </time>
                <p className="my-4">{post.intro}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: addTextToEmbedAlt(post.body, 'http://137.184.36.245:8000/media/images/', '.original.png') }}></div>
        </main>
    );
}