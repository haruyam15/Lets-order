import { supabase } from '@/lib/supabase';

export interface Item {
  id: number;
  category: string;
  title: string;
  price: number;
  icon_img: string;
}

export async function fetchCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .schema('catalog') // ✅ catalog 스키마 지정
    .from('categories') // ✅ 원본 테이블
    .select('name')
    .order('id', { ascending: true });

  if (error) throw error;
  return (data ?? []).map((r: { name: string }) => r.name);
}

export async function fetchItems(): Promise<Item[]> {
  const { data, error } = await supabase
    .schema('catalog') // ✅ catalog 스키마 지정
    .from('items') // ✅ items 테이블
    .select('id, category, title, price, icon_img')
    .order('id', { ascending: true });

  if (error) throw error;
  return data ?? [];
}
