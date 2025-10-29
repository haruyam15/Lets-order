import BackButton from '@/components/common/BackButton';
import Counter from '@/components/common/Counter';
import FixedButton from '@/components/common/FixedButton';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function CartPage() {
  return (
    <div className="flex flex-col w-full h-screen md:w-2xl">
      <BackButton path="/menu" title="장바구니"></BackButton>

      <div className="flex-1 w-full min-h-0 px-3 overflow-y-auto">
        <ul className="flex flex-col gap-10 mt-3">
          <li>
            <div className="flex items-center justify-between gap-10">
              <div className="flex flex-col gap-1">
                <p>스코프 (Scope)</p>
                <span className="text-sm text-zinc-600">
                  초급, 면접 질문 세트, 시각화 다이어그램(+500원), 요약 리딩
                </span>
                <span className="text-sm">4,500원</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full size-8 bg-secondary"
              >
                <X className="size-5 text-zinc-600" />
              </Button>
            </div>
            <div className="flex justify-end mt-3">
              <Counter />
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between gap-10">
              <div className="flex flex-col gap-1">
                <p>실행 컨텍스트 (Execution Context)</p>
                <span className="text-sm text-zinc-600">
                  중급, 시각화 다이어그램(+500원), 퀴즈 10문제(+1,000원),
                  프로젝트 실습(+1,000원)
                </span>
                <span className="text-sm">4,500원</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full size-8 bg-secondary"
              >
                <X className="size-5 text-zinc-600" />
              </Button>
            </div>
            <div className="flex justify-end mt-3">
              <Counter />
            </div>
          </li>
        </ul>
      </div>

      <FixedButton>
        <NavLink to="/complete">3개 10,000원 결제하기</NavLink>
      </FixedButton>
    </div>
  );
}
