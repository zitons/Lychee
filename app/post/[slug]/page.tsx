/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-12
 * @FilePath: /AisCai-Lab/app/post/[slug]/page.tsx
 * Helllllloo
 */
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../[slug]/page.css";
import Head from "@/components/head";

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
  console.log(post);
  return (
    <main>
      <Head />
      <section className="playout">
        <div>
          <Image src={post.featured_image_url} width="100" height="1" alt="1" />
        </div>
        <div>
          <div>
            <div className="post-top">
              <p className="top-slug">{post.categories[0].name}</p>
              <div className="top-tags">
                {post.tags.map((tag) => (
                  <p key={tag.count} className="tags">
                    <span>&#35;</span>
                    {tag.name}
                  </p>
                ))}
              </div>
            </div>

            <h1 className="ptitle">
              {post.title.rendered}
              {/* <span>{new Date(post.modified).toISOString().split("T")[0]}</span> */}
            </h1>
          </div>
          <div>
            <span>{post.modified}</span>
            <div></div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </div>
      </section>
    </main>
  );
}
