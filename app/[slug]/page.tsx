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



    return (
        <main>
            <div>
                <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                <time dateTime={post.date}>
                    {new Date(post.date).toDateString()}
                </time>
                <p className="my-4">{post.intro}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
        </main>
    );
}