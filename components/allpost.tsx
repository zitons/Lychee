/*
 * @Date: 2025-02-21
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-22
 * @FilePath: /AisCai-Lab/components/allpost.tsx
 * Helllllloo
 */
import Image from "next/image";

export default function posts() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  const listitem = list.map(() => {
    return (
      <div className="post-item" key={list}>
        <div className="post-cover">
          <Image
            src={
              "http://137.184.36.245:8000/media/images/Chatgpt_Cover_01.original.png"
            }
            // width={100}
            // height={100}
            alt={"adahjskld"}
            fill={true}
          />
        </div>
        <div className="post-info">
          <div className="post-title">
            <p>如何优雅食用“ChatGPT”<span>#11/2</span></p>
          </div>
        </div>
      </div>
    );
  });
  return <div className="help-post">{listitem}</div>;
}
