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
}

interface PostResult {
    id: number;
    title: string;
    slug: string;
    date: string;
    cover?: string;
    tag: number[];
    sort: string;
}

export async function Wordpress() {
    try {
        // Fetch blog posts
        const indexPages = await fetch(
            `http://137.184.36.245:18281/index.php?rest_route=/wp/v2/posts&page=1`,
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        ).then((response) => response.json());

        // Fetch tags
        const tags = await fetch(
            'http://137.184.36.245:18281/index.php?rest_route=/wp/v2/tags',
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        ).then((response) => response.json());

        // Fetch hitokoto
        const hitokotoResponse = await fetch('http://v1.hitokoto.cn/?c=i');
        const hitokoto = await hitokotoResponse.text();

        // Transform post data
        const results: PostResult[] = indexPages.map((data: PostData) => ({
            id: data.id,
            title: data.title.rendered,
            slug: data.slug,
            date: new Date(data.date).toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
            }),
            cover: data.featured_image_url,
            tag: data.tags,
            sort: data.categories[0],
        }));

        return { indexPages, tags, hitokoto, results };
    } catch (error) {
        throw new Error('Failed to fetch blog data');
    }
}
