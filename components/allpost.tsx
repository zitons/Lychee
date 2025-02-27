/*
 * @Date: 2025-02-21
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-27
 * @FilePath: /AisCai-Lab/components/allpost.tsx
 * Helllllloo
 */
import Image from "next/image";

export default function posts({ PostItem }) {
  // const list = [1, 2, 3, 4, 5, 6, 7, 8];
  // const keys = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"];
  console.log(PostItem);
  const listitem = PostItem.map((post: any) => {
    console.log(post);
    return (
      <div className="post-item flex-col" key={post.id}>
        <div className="post-cover">
          <Image src={post.cover} alt={"alt"} fill={true} />
        </div>
        <div className="post-info flex-col">
          <div className="post-title">
            <div className="top-tips">
              <p>{post.sort[0].name}</p>
            </div>
            <p>
              {post.title}
              <span>{post.date}</span>
            </p>
          </div>
          <div className="bottom-tips flex">
            {post.tag.map((item) => (
              <div
                key={item.count}
                className="tags"
                style={{ backgroundColor: `var(--${item.slug})` }}
              >
                <div className=" w-4 h-4 relative">
                  <Image
                    src={item.description}
                    alt={item.name}
                    // width={50}
                    // height={50}
                    fill={true}
                  />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });
  return <div className="help-post">{listitem}</div>;
}
