/*
 * @Date: 2025-03-01
 * @LastEditors: vhko
 * @LastEditTime: 2025-03-01
 * @FilePath: /AisCai-Lab/components/homebar.tsx
 * Helllllloo
 */
type Tag = {
    slug: string;
    name: string;
  };
export default function HomeBar({ TagItem }:{TagItem:Tag[]}) {
  console.log(TagItem);
  return (
    <div className="homebar">
      <div className="block">
        <div className="flex text-[16px] gap-2">
          {TagItem.map((tag) => (
            <p key={tag.slug} className="tagbar">
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
