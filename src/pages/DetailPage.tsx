import FixedButton from '@/components/common/FixedButton';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Separator } from '@/components/ui/separator';
import { Check, ChevronLeft, Minus, Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const checked = 'text-orange-400';
const selected = 'border-2 border-orange-400 bg-white';

export function DetailPage() {
  return (
    <div>
      <div className="sticky top-0 bg-white">
        <NavLink to="/menu" className="mt-3 size-10 md:size-15">
          <ChevronLeft className="md:size-15 size-10" />
        </NavLink>
      </div>
      <div className="w-full px-3">
        <div className="w-full h-[200px] overflow-hidden mt-2 mb-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
            className="object-contain size-full"
          />
        </div>
        <dl>
          <dt className="mb-2 text-xl font-bold">스코프 (Scope)</dt>
          <dd className="text-base">
            변수 접근 범위를 한 번에 정리해요. 블록/함수/전역 스코프 차이를
            예제로 이해합니다.
          </dd>
        </dl>

        <div className="flex justify-between mt-9">
          <p className="text-xl font-semibold text-gray-800">3500원</p>
          <div className="flex items-center gap-3">
            <Button className="size-10" variant="secondary">
              <Minus />
            </Button>
            <p>1</p>
            <Button className="size-10" variant="secondary">
              <Plus />
            </Button>
          </div>
        </div>
      </div>

      <Separator className="py-2 my-9 bg-secondary" />

      <div className="w-full px-3">
        <p className="text-lg font-semibold">난이도</p>
        <ul className="grid grid-cols-2 gap-2 my-5 text-base">
          <li
            className={`py-5 text-center rounded-md cursor-pointer hover:opacity-80 ${selected}`}
          >
            <button>초급</button>
          </li>
          <li className="py-5 text-center rounded-md cursor-pointer bg-secondary hover:opacity-80">
            <button>중급</button>
          </li>
          <li className="py-5 text-center rounded-md cursor-pointer bg-secondary hover:opacity-80">
            <button>고급</button>
          </li>
        </ul>
      </div>

      <Separator className="my-9" />

      <div className="w-full px-3">
        <p className="text-lg font-semibold">추가 학습(최대 2개)</p>
        <ul className="flex flex-col gap-5 my-5 text-base">
          <li className="flex items-center justify-between cursor-pointer">
            <div>
              <p>면접 질문 세트</p>
              <span className="text-sm text-zinc-600">+ 0원</span>
            </div>
            <div>
              <Check className={checked} />
            </div>
          </li>
          <li className="flex items-center justify-between cursor-pointer">
            <div>
              <p>시각화 다이어그램</p>
              <span className="text-sm text-zinc-600">+ 500원</span>
            </div>
            <div>
              <Check className="text-zinc-300" />
            </div>
          </li>
          <li className="flex items-center justify-between cursor-pointer">
            <div>
              <p>퀴즈 10문항</p>
              <span className="text-sm text-zinc-600">+ 500원</span>
            </div>
            <div>
              <Check className="text-zinc-300" />
            </div>
          </li>
          <li className="flex items-center justify-between cursor-pointer">
            <div>
              <p>심화 링크 모음</p>
              <span className="text-sm text-zinc-600">+ 1000원</span>
            </div>
            <div>
              <Check className="text-zinc-300" />
            </div>
          </li>
        </ul>
      </div>

      <Separator className="my-9" />

      <div className="w-full px-3">
        <p className="text-lg font-semibold">학습 형태</p>

        <div className="my-5">
          <Drawer>
            <DrawerTrigger className="w-full px-2 py-2 text-sm text-left border rounded-md cursor-pointer bg-zinc-50 text-zinc-500">
              옵션을 선택해주세요
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>학습 형태를 선택해주세요</DrawerTitle>
              </DrawerHeader>
              <ul className="flex flex-col gap-5 px-5 my-5 text-base">
                <li className="flex items-center justify-between">
                  <button className="block w-full text-left">
                    <p>요약 리딩</p>
                    <span className="text-sm text-zinc-600">+ 0원</span>
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <button className="block w-full text-left">
                    <p>핵심 예제</p>
                    <span className="text-sm text-zinc-600">+ 500원</span>
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <button className="block w-full text-left">
                    <p>프로젝트 실습</p>
                    <span className="text-sm text-zinc-600">+ 1000원</span>
                  </button>
                </li>
              </ul>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <FixedButton>
        <NavLink to="/menu">3개 10,000원 담기</NavLink>
      </FixedButton>
    </div>
  );
}
