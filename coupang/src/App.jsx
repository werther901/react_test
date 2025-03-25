import './css/App.css';
import ImageComp from "./ImageComp";
import MainComp from "./MainComp";
import { ReadyContext } from './ReadyContext';



function App() {
  // 준비중
  const ready = () => { alert('준비중 입니다.'); }

  return (
    <div className='container'>

      <ReadyContext.Provider value={ready}>
        {/* 상품 판매란 */}
        <ImageComp />

        {/* 상품 설명란 */}
        <MainComp />
      </ReadyContext.Provider>
      
    </div>
  );
}


export default App;