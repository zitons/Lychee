/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-06
 * @FilePath: /AisCai-Lab/app/post/[slug]/page.tsx
 * Helllllloo
 */
// import { useState } from "react";
import Link from "next/link";
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
        <Link href={`/`}>
          <div className="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 64 64"
            >
              <path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"></path>
            </svg>
            <span>返回</span>
          </div>
        </Link>
        <div>
          <div>
            <p>{post.categories[0].name}</p>
            <h1 className="ptitle">
              {post.title.rendered}
              <span>{new Date(post.modified).toISOString().split("T")[0]}</span>
            </h1>
          </div>
          <div>
            {post.tags.map((tag) => (
              <span key={tag.count}>{tag.name}</span>
            ))}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </div>
      </section>
    </main>
  );
}
