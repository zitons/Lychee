/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-20
 * @FilePath: /AisCai-Lab/components/main.tsx
 * Helllllloo
 */
export default function main() {
  return (
    <main className=" m-auto  max-2xl:max-w-[1280px] mt-[6rem] flex gap-6">
      <div className="relative rounded-3xl overflow-hidden w-[500px] h-[320px] bg-gray-200">
        <div className="absolute top-1/4 left-10 text-white">
          <h1 className="text-4xl font-bold">让人人都享受到</h1>
          <h1 className="text-4xl font-bold">时代的便捷</h1>
        </div>
      </div>
      <div className="top gap-[20px] flex flex-col">
        <div className=" rounded-xl bg-slate-300 h-[150px] w-[240px] p-4">
          <h1>收集了999+的模型</h1>
        </div>
        <div className=" rounded-xl bg-slate-300 h-[150px] w-[240px] p-4">
          <h1>收集了999+的模型</h1>
        </div>
      </div>
      <div className="right w-[300px] h-[320px] bg-slate-400 rounded-2xl p-6 pt-4">
        <h1 className="text-xl font-bold">热搜</h1>
        <ul className="text-lg mt-4">
          <li>hahaha</li>
          <li>hahaha</li>
          <li>hahaha</li>
          <li>hahaha</li>
          <li>hahaha</li>
        </ul>
      </div>
    </main>
  );
}
