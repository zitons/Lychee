'use client';
import { useState, useEffect, Suspense } from 'react';
import Head from '@/components/head';
import Main from '@/components/main';

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

export default function Profile() {
    const [data, setData] = useState<{
        indexPages: any[];
        tags: any[];
        hitokoto: string;
        results: PostResult[];
    } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBlogData() {
            try {
                setLoading(true);
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

                setData({ indexPages, tags, hitokoto, results });
            } catch (err) {
                setError('Failed to load profile data');
            } finally {
                setLoading(false);
            }
        }
        fetchBlogData();
    }, []);

    if (loading) return <div className="text-green-500">Loading Profile...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="border-2 border-green-500 p-4">
            <Suspense fallback={<div className="text-gray-500">Loading blog content...</div>}>
                <main>
                    <Head abc={data!.indexPages} hitokoto={data!.hitokoto} />
                    <div className="mb-8">
                        <Main PostData={data!.results} TagItem={data!.tags} />
                    </div>
                </main>
            </Suspense>
        </div>
    );
}
