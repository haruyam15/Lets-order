import { Category } from '@/components/Category';
import FixedButton from '@/components/common/FixedButton';
import { List } from '@/components/List';
import { Tabs } from '@/components/ui/tabs';
import { NavLink } from 'react-router-dom';

export function MenuPage() {
  return (
    <div className="flex flex-col w-full h-screen px-3 md:w-2xl">
      <h1 className="mt-5 mb-10 text-2xl font-bold">프론트엔드 자판기</h1>

      <div className="flex-1 min-h-0">
        <Tabs defaultValue="JavaScript" className="h-full gap-5">
          <Category />
          <div className="flex-1 min-h-0 overflow-y-auto">
            <List />
          </div>
        </Tabs>
      </div>
      <FixedButton>
        <NavLink to="/cart">3개 10,000원 장바구니 보기</NavLink>
      </FixedButton>
    </div>
  );
}
