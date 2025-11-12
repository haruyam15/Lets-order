import { CategoryTabs } from '@/components/CategoryTabs';
import FixedButton from '@/components/common/FixedButton';
import { NavLink } from 'react-router-dom';

export function MenuPage() {
  return (
    <div className="flex flex-col w-full h-screen px-3 md:w-2xl">
      <h1 className="mt-5 mb-10 text-2xl font-bold">프론트엔드 자판기</h1>
      <CategoryTabs />
      <FixedButton>
        <NavLink to="/cart">3개 10,000원 장바구니 보기</NavLink>
      </FixedButton>
    </div>
  );
}
