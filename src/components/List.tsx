// import { fetchItems } from '@/api';
import { TabsContent } from '@/components/ui/tabs';
import { NavLink } from 'react-router-dom';

export function List() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetchItems().then(setItems).catch(console.error);
  // }, []);

  // if (!cats && !err) return <div>로딩...</div>;
  // if (err) return <div>에러: {err}</div>;

  return (
    // items.map((item)=>{

    // })
    <TabsContent value="JavaScript">
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
      </ul>
    </TabsContent>
  );
}

// <TabsContent value="React">
//   <ul className="flex flex-col gap-5 mt-3 text-base">
//     <li>
//       <NavLink to="/detail/0" className="flex items-center gap-3">
//         <div className="size-10">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
//             alt=""
//           />
//         </div>
//         <div>
//           <p>컴포넌트 (Component)</p>
//           <span className="text-sm text-zinc-600">4,000원</span>
//         </div>
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/detail/1" className="flex items-center gap-3">
//         <div className="size-10">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
//             alt=""
//           />
//         </div>
//         <div>
//           <p>JSX (JavaScript XML)</p>
//           <span className="text-sm text-zinc-600">4,000원</span>
//         </div>
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/detail/2" className="flex items-center gap-3">
//         <div className="size-10">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
//             alt=""
//           />
//         </div>
//         <div>
//           <p>Props (속성)</p>
//           <span className="text-sm text-zinc-600">4,000원</span>
//         </div>
//       </NavLink>
//     </li>
//     {/* <li>State (상태)</li>
//   <li>렌더링과 재렌더링 (Rendering / Re-rendering)</li>
//   <li>Hooks (훅)</li>
//   <li>useEffect (사이드 이펙트)</li>
//   <li>Context API</li>
//   <li>리렌더링 최적화</li>
//   <li>가상 DOM과 Reconciliation</li>
//   <li>모듈 시스템 (Module System)</li> */}
//   </ul>
// </TabsContent>
// <TabsContent value="CS">
//   <ul className="flex flex-col gap-5 mt-3 text-base">
//     <li>
//       <NavLink to="/detail/0" className="flex items-center gap-3">
//         <div className="size-10">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/11532/11532661.png"
//             alt=""
//           />
//         </div>
//         <div>
//           <p>자료구조 (Data Structure)</p>
//           <span className="text-sm text-zinc-600">4,000원</span>
//         </div>
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/detail/1" className="flex items-center gap-3">
//         <div className="size-10">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/11532/11532661.png"
//             alt=""
//           />
//         </div>
//         <div>
//           <p>알고리즘 (Algorithm)</p>
//           <span className="text-sm text-zinc-600">4,000원</span>
//         </div>
//       </NavLink>
//     </li>
//     {/* <li>운영체제 (Operating System)</li>
//   <li>프로세스 vs 스레드 (Process vs Thread)</li>
//   <li>메모리 관리 (Memory Management)</li>
//   <li>네트워크 (Network) 기본</li>
//   <li>HTTP & REST</li>
//   <li>데이터베이스 (Database)</li>
//   <li>컴퓨터 구조 (Computer Architecture)</li>
//   <li>디자인 패턴 & 아키텍처 (Design Pattern & Architecture)</li> */}
//   </ul>
// </TabsContent>
