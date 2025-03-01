/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-01
 * @FilePath: /AisCai-Lab/components/head.tsx
 * Helllllloo
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function head(abc: any) {
  return (
    <section className="head">
      <div className="head-title">
        <h1>AisCai Lab{abc.title}</h1>
      </div>
    </section>
  );
}
