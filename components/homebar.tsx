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
  id: string
};
export default function HomeBar({ TagItem }: { TagItem: Tag[] }) {
  console.log(TagItem);
  return (
    <div className="homebar">
      <div className="block">
        <div className="flex text-[16px] gap-2">
          {TagItem.map((tag) => (
            <a href={"tags/" + tag.id} key={tag.id}>

              <p className="tagbar">
                {tag.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
