/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-20
 * @FilePath: /AisCai-Lab/components/head.tsx
 * Helllllloo
 */
export default async function head(abc: any) {
  return (
    <main className="head">
      <div className="head-title">
        <h1>AisCai Lab{abc.title}</h1>
      </div>
    </main>
  );
}
