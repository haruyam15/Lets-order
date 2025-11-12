import { supabase } from '@/lib/supabase';
import type { Category, CategoryData, Item } from '@/types';

export async function fetchCategories(): Promise<CategoryData[]> {
  const { data, error } = await supabase
    .schema('catalog') // ✅ catalog 스키마 지정
    .from('categories') // ✅ 원본 테이블
    .select('name, id')
    .order('id', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function fetchItems(category: Category): Promise<Item[]> {
  let query = supabase
    .schema('catalog')
    .from('items')
    .select('id, category, title, price, icon_img')
    .order('id', { ascending: true });

  query = query.eq('category', category);

  const { data, error } = await query;
  if (error) throw error;

  return data ?? [];
}
