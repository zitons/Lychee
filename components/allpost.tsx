/*
 * @Date: 2025-02-21
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-06
 * @FilePath: /AisCai-Lab/components/allpost.tsx
 * Helllllloo
 */
"use client";
import Image from "next/image";
import Link from "next/link";

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
  console.log(PostItem);

  return (
    <div className="help-post">
      {PostItem.map((post) => (
        <Link key={post.id} href={`/post/${post.slug}`}>
          <div className="post-item flex-col">
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
                  <Link key={item.slug} href={`/post/demo1`}>
                    <div className={`tags`}>
                      {/* 下面是svg，暂时关闭 */}
                      {/* <div
                    className={`${item.slug} tags-svg`}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div> */}
                      <p>&#35;{item.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
