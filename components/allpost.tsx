/*
 * @Date: 2025-02-21
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-01
 * @FilePath: /AisCai-Lab/components/allpost.tsx
 * Helllllloo
 */
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PostResult = {
  id: number;
  title: string;
  slug: string;
  date: string;
  cover: string;
  tag: tagItem[];
  sort: string;
};
type tagItem = {
  slug: string;
  description: string;
  name: string;
};

export default function Posts({ PostItem }: { PostItem: PostResult[] }) {
  const router = useRouter();
  console.log(PostItem);

  return (
    <div className="help-post">
      {PostItem.map((post) => (
        <div
          className="post-item flex-col"
          key={post.id}
          onClick={() => router.push(`/post/${post.slug}`)}
        >
          <div className="post-cover">
            <Image src={post.cover} alt="alt" fill={true} />
          </div>
          <div className="post-info flex-col">
            <div className="post-title">
              <div className="top-tips">
                <p>{post.sort.cat_name}</p>
              </div>
              <p>
                {post.title}&nbsp;<span>{post.date}</span>
              </p>
            </div>
            <div className="bottom-tips flex">
              {post.tag.map((item) => (
                <div key={item.slug} className={`tags ${item.slug}`}>
                  <div className="w-4 h-4 relative">
                    <Image src={item.description} alt={item.name} fill={true} />
                  </div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
