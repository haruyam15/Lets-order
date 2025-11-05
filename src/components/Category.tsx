import { fetchCategories } from '@/api';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';

export function Category() {
  const [cats, setCats] = useState<string[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories()
      .then(setCats)
      .catch((e) => setErr(e.message));
  }, []);

  if (!cats && !err) return <div>로딩...</div>;
  if (err) return <div>에러: {err}</div>;

  return (
    <TabsList className="w-full shrink-0">
      {cats!.map((name) => (
        <TabsTrigger value={name}>{name}</TabsTrigger>
      ))}
    </TabsList>
  );
}
