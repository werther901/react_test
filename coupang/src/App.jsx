import './css/App.css';
import { Button, Table } from 'antd';
import { StarFilled } from '@ant-design/icons';
import ImageComp from "./ImageComp";
import MainComp from "./MainComp";



function App() {
  return (
    <div className='container'>

      {/* 상품 판매란 */}
      <ImageComp />

      {/* 상품 설명란 */}
      <MainComp />
      
    </div>
  );
}


export default App;