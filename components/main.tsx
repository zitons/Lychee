/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-24
 * @FilePath: /AisCai-Lab/components/main.tsx
 * Helllllloo
 */
import Image from "next/image";
import Posts from "@/components/allpost";
export default function maind({ PostData }) {
  console.log(PostData);
  return (
    <section className="container layout flex-col">
      <div className="carousel">
        <div className="swiper">
          <div className="absolute mt-12 left-10 text-white z-10">
            <h1 className="text-4xl font-bold w-[59%]">
              让人人都享受到时代的便捷
            </h1>
          </div>
          <div>
            <Image
              className="rounded-[18px]"
              src={
                "http://137.184.36.245:8000/media/images/saradasish-pradhan-gEpncIlZq7c-unsplash.original.jpg"
              }
              alt="1"
              // width={100}
              // height={100}
              fill={true}
            />
          </div>
        </div>
        <div className="top gap-[20px] flex flex-col">
          <div className="notice">
            <h1>收集了999+的模型{}</h1>
          </div>
          <div className=" notice">
            <h1>赞助我们</h1>
          </div>
        </div>
        <div className="notice-right">
          <h1 className="text-xl font-bold">热搜</h1>
          <ul className="text-lg mt-4 ">
            <li>hahaha</li>
            <li>hahaha</li>
            <li>hahaha</li>
            <li>hahaha</li>
            <li>hahaha</li>
          </ul>
        </div>
      </div>
      <Posts />
    </section>
  );
}
