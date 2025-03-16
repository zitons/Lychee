/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-02
 * @FilePath: /AisCai-Lab/app/post/page.tsx
 * Helllllloo
 */

import React from "react";
import Posts from "@/components/allpost";
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
export default async function Blog({
    params: { slug },
}: {
    params: { slug: string };
}) {
    // Fetch the BlogPage's details based on the slug

    // Fetch the BlogPage's details based on the slug
    const data = await fetch(
        `http://137.184.36.245:18281/index.php?rest_route=/wp/v2/posts&tags=${slug}`,
        {
            headers: {
                Accept: "application/json",
            },
        }
    ).then((response) => response.json());
    const results: PostResult[] = data.map((data: PostData) => {
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
            <div className="mb-8">
                <Posts PostItem={results} />
            </div>
        </main>
    );

}
