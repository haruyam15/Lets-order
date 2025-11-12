import { List } from '@/components/List';
import { Tabs } from '@/components/ui/tabs';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fetchCategories } from '@/api';
import { useEffect, useState } from 'react';
import type { Category, CategoryData } from '@/types';

export function CategoryTabs() {
  const [categories, setCategories] = useState<CategoryData[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [active, setActive] = useState<Category>('JavaScript');

  const handleTabChange = (value: Category) => {
    setActive(value);
  };

  useEffect(() => {
    fetchCategories()
      .then((result) => setCategories(result))
      .catch((e) => setErr(e.message));
  }, []);

  if (!categories) return <div>로딩...</div>;
  if (err) return <div>에러: {err}</div>;

  return (
    <div className="flex-1 min-h-0">
      <Tabs
        defaultValue="JavaScript"
        className="h-full gap-5"
        onValueChange={(value) => handleTabChange(value as Category)}
      >
        <TabsList className="w-full shrink-0">
          {categories.map((cate) => (
            <TabsTrigger value={cate.name} key={cate.id}>
              {cate.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <List active={active} />
        </div>
      </Tabs>
    </div>
  );
}
