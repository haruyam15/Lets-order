import FixedButton from '@/components/common/FixedButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NavLink } from 'react-router-dom';

export function MenuPage() {
  return (
    <div className="flex flex-col w-full h-screen mx-3 md:w-2xl">
      <h1 className="mt-5 mb-10 text-2xl font-bold">프론트엔드 자판기</h1>

      <div className="flex-1 min-h-0">
        <Tabs defaultValue="javascript" className="h-full gap-5">
          <TabsList className="w-full shrink-0">
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="cs">CS</TabsTrigger>
          </TabsList>
          <div className="flex-1 min-h-0 overflow-y-auto">
            <TabsContent value="javascript">
              <ul className="flex flex-col gap-5 mt-3 text-base">
                <li>
                  <NavLink to="/detail/0" className="flex items-center gap-3">
                    <div className="size-10">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>실행 컨텍스트 (Execution Context)</p>
                      <span className="text-sm text-zinc-600">4,000원</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/detail/1" className="flex items-center gap-3">
                    <div className="size-10">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>호이스팅 (Hoisting)</p>
                      <span className="text-sm text-zinc-600">4,000원</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/detail/2" className="flex items-center gap-3">
                    <div className="size-10">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>스코프 (Scope)</p>
                      <span className="text-sm text-zinc-600">4,000원</span>
                    </div>
                  </NavLink>
                </li>
                {/* <li>클로저 (Closure)</li>
              <li>this 바인딩 (this Keyword)</li>
              <li>프로토타입 (Prototype)</li>
              <li>비동기 처리 (Asynchronous)</li>
              <li>이벤트 루프 (Event Loop)</li>
              <li>얕은 복사 vs 깊은 복사 (Shallow vs Deep Copy)</li>
              <li>모듈 시스템 (Module System)</li> */}
              </ul>
            </TabsContent>
            <TabsContent value="react">
              <ul className="flex flex-col gap-5 mt-3 text-base">
                <li>
                  <NavLink to="/detail/0" className="flex items-center gap-3">
                    <div className="size-10">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>컴포넌트 (Component)</p>
                      <span className="text-sm text-zinc-600">4,000원</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/detail/1" className="flex items-center gap-3">
                    <div className="size-10">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>JSX (JavaScript XML)</p>
                      <span className="text-sm text-zinc-600">4,000원</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/detail/2" className="flex items-center gap-3">
                    <div className="size-10">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>Props (속성)</p>
                      <span className="text-sm text-zinc-600">4,000원</span>
                    </div>
                  </NavLink>
                </li>
                {/* <li>State (상태)</li>
              <li>렌더링과 재렌더링 (Rendering / Re-rendering)</li>
              <li>Hooks (훅)</li>
              <li>useEffect (사이드 이펙트)</li>
              <li>Context API</li>
              <li>리렌더링 최적화</li>
              <li>가상 DOM과 Reconciliation</li>
              <li>모듈 시스템 (Module System)</li> */}
              </ul>
            </TabsContent>
            <TabsContent value="cs">
              <ul className="flex flex-col gap-5 mt-3 text-base">
                <li>
                  <NavLink to="/detail/0" className="flex items-center gap-3">
                    <div className="size-10">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/11532/11532661.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>자료구조 (Data Structure)</p>
                      <span className="text-sm text-zinc-600">4,000원</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/detail/1" className="flex items-center gap-3">
                    <div className="size-10">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/11532/11532661.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>알고리즘 (Algorithm)</p>
                      <span className="text-sm text-zinc-600">4,000원</span>
                    </div>
                  </NavLink>
                </li>
                {/* <li>운영체제 (Operating System)</li>
              <li>프로세스 vs 스레드 (Process vs Thread)</li>
              <li>메모리 관리 (Memory Management)</li>
              <li>네트워크 (Network) 기본</li>
              <li>HTTP & REST</li>
              <li>데이터베이스 (Database)</li>
              <li>컴퓨터 구조 (Computer Architecture)</li>
              <li>디자인 패턴 & 아키텍처 (Design Pattern & Architecture)</li> */}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <FixedButton>3개 10,000원 장바구니 보기</FixedButton>
    </div>
  );
}
