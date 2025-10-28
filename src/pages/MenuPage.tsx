import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function MenuPage() {
  return (
    <div className="w-full mx-3 md:w-2xl">
      <h1 className="my-2 text-2xl font-bold">프론트엔드 자판기</h1>

      <div className="my-5">
        <Tabs defaultValue="javascript">
          <TabsList>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="cs">CS</TabsTrigger>
          </TabsList>
          <TabsContent value="javascript">
            <ul className="flex flex-col gap-5 mt-3">
              <li>실행 컨텍스트 (Execution Context)</li>
              <li>호이스팅 (Hoisting)</li>
              <li>스코프 (Scope)</li>
              <li>클로저 (Closure)</li>
              <li>this 바인딩 (this Keyword)</li>
              <li>프로토타입 (Prototype)</li>
              <li>비동기 처리 (Asynchronous)</li>
              <li>이벤트 루프 (Event Loop)</li>
              <li>얕은 복사 vs 깊은 복사 (Shallow vs Deep Copy)</li>
              <li>모듈 시스템 (Module System)</li>
            </ul>
          </TabsContent>
          <TabsContent value="react">
            <ul className="flex flex-col gap-5 mt-3">
              <li>컴포넌트 (Component)</li>
              <li>JSX (JavaScript XML)</li>
              <li>Props (속성)</li>
              <li>State (상태)</li>
              <li>렌더링과 재렌더링 (Rendering / Re-rendering)</li>
              <li>Hooks (훅)</li>
              <li>useEffect (사이드 이펙트)</li>
              <li>Context API</li>
              <li>리렌더링 최적화</li>
              <li>가상 DOM과 Reconciliation</li>
              <li>모듈 시스템 (Module System)</li>
            </ul>
          </TabsContent>
          <TabsContent value="cs">
            <ul className="flex flex-col gap-5 mt-3">
              <li>자료구조 (Data Structure)</li>
              <li>알고리즘 (Algorithm)</li>
              <li>운영체제 (Operating System)</li>
              <li>프로세스 vs 스레드 (Process vs Thread)</li>
              <li>메모리 관리 (Memory Management)</li>
              <li>네트워크 (Network) 기본</li>
              <li>HTTP & REST</li>
              <li>데이터베이스 (Database)</li>
              <li>컴퓨터 구조 (Computer Architecture)</li>
              <li>디자인 패턴 & 아키텍처 (Design Pattern & Architecture)</li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
