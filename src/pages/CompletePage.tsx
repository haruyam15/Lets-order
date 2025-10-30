import FixedButton from '@/components/common/FixedButton';
import Title from '@/components/common/Title';
import { CircleCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function CompletePage() {
  return (
    <div className="flex flex-col w-full h-screen md:w-2xl">
      <Title text="주문완료" backBtn={false} />

      <div className="flex flex-col items-center justify-center flex-1 w-full gap-2 px-3">
        <CircleCheck className="mb-5 text-orange-500 size-15" />
        <p className="text-xl font-bold">주문이 완료되었습니다</p>
        <span className="text-base text-zinc-600">4개 18,000원</span>
      </div>

      <FixedButton>
        <NavLink to="/menu">완료우 !</NavLink>
      </FixedButton>
    </div>
  );
}
