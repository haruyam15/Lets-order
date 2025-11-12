// import { fetchItems } from '@/api';
import { fetchItems } from '@/api';
import { TabsContent } from '@/components/ui/tabs';
import { formatPrice } from '@/lib/utils';
import type { Category, Item } from '@/types';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface ListProps {
  active: Category;
}

export function List({ active }: ListProps) {
  const [datas, setData] = useState<Item[] | null>(null);

  useEffect(() => {
    fetchItems(active).then(setData);
  }, [active]);

  if (!datas) return <div>로딩...</div>;

  if (datas.length === 0) return <div>데이터가 없습니다.</div>;

  return (
    <TabsContent value={active}>
      <ul className="flex flex-col gap-5 mt-3 text-base">
        {datas.map((data) => (
          <li key={data.id}>
            <NavLink
              to={`/detail/${data.id}`}
              className="flex items-center gap-3"
            >
              <div className="size-10">
                <img src={data.icon_img} alt="" />
              </div>
              <div>
                <p>{data.title}</p>
                <span className="text-sm text-zinc-600">
                  {formatPrice(data.price)}원
                </span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </TabsContent>
  );
}
